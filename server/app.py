from flask import Flask, request, jsonify
from flask_cors import CORS
import smtplib
from email.message import EmailMessage

app = Flask(__name__)
CORS(app)

# Email credentials (create .env or use directly – not safe for prod)
ADMIN_EMAIL = "udayreddi28@gmail.com"
ADMIN_PASSWORD = "awow mefj tkdq tdiz"  # Use App Password if Gmail

@app.route("/send", methods=["POST"])
def send_email():
    data = request.get_json()
    name = data.get("name")
    user_email = data.get("email")
    message = data.get("message")

    try:
        # Send to YOU (admin)
        email_admin = EmailMessage()
        email_admin["Subject"] = f"📬 New Contact from {name}"
        email_admin["From"] = ADMIN_EMAIL
        email_admin["To"] = ADMIN_EMAIL
        email_admin.set_content(f"Name: {name}\nEmail: {user_email}\nMessage:\n{message}")

        # Send to USER (confirmation)
        email_user = EmailMessage()
        email_user["Subject"] = "🎉 Thanks for contacting Uday Kumar!"
        email_user["From"] = ADMIN_EMAIL
        email_user["To"] = user_email
        email_user.set_content(
            f"Hi {name},\n\nThank you for reaching out to me! 🙌\nI’ll get back to you soon.\nMeanwhile, feel free to check out the rest of the portfolio.\n\nBest,\nUday Kumar"
        )

        # Email Server (Gmail)
        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as smtp:
            smtp.login(ADMIN_EMAIL, ADMIN_PASSWORD)
            smtp.send_message(email_admin)
            smtp.send_message(email_user)

        return jsonify({"success": True})
    except Exception as e:
        print("Error sending email:", e)
        return jsonify({"success": False, "error": str(e)})

if __name__ == "__main__":
    app.run(debug=True)
