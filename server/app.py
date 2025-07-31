from flask import Flask, request, jsonify
from flask_cors import CORS
import smtplib
from email.message import EmailMessage
import os
from dotenv import load_dotenv

# Load environment variables from .env
load_dotenv()

app = Flask(__name__)
CORS(app)

# Environment variables
ADMIN_EMAIL = os.getenv("ADMIN_EMAIL")
ADMIN_PASSWORD = os.getenv("ADMIN_PASSWORD")


@app.route("/send", methods=["POST"])
def send_email():
    data = request.get_json()
    name = data.get("name")
    user_email = data.get("email")
    message = data.get("message")

    try:
        # Email to Admin
        email_admin = EmailMessage()
        email_admin["Subject"] = f"📬 New Contact from {name}"
        email_admin["From"] = ADMIN_EMAIL
        email_admin["To"] = ADMIN_EMAIL
        email_admin.set_content(f"Name: {name}\nEmail: {user_email}\nMessage:\n{message}")

        # Email to User
        email_user = EmailMessage()
        email_user["Subject"] = "🎉 Thanks for contacting Uday Kumar!"
        email_user["From"] = ADMIN_EMAIL
        email_user["To"] = user_email
        email_user.set_content(
            f"Hi {name},\n\nThank you for reaching out to me! 🙌\nI’ll get back to you soon.\nMeanwhile, feel free to check out the rest of the portfolio.\n\nBest,\nUday Kumar"
        )

        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as smtp:
            smtp.login(ADMIN_EMAIL, ADMIN_PASSWORD)
            smtp.send_message(email_admin)
            smtp.send_message(email_user)

        return jsonify({"success": True})
    except Exception as e:
        print("Error:", e)
        return jsonify({"success": False, "error": str(e)})


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
