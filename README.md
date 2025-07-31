# 🚀 Narapureddi Uday Kumar - Personal Portfolio

Welcome to my **developer portfolio website** built using **React (Vite)** for the frontend and **Flask** for the backend (contact form API).  
This portfolio showcases my **skills**, **projects**, **education**, **internships**, **certifications**, **badges**, and a **responsive contact form** with email integration.

---

## 📸 Demo

**Frontend Live**: [https://udaykumarportfolio.vercel.app](https://uday-brown.vercel.app/))  
**Backend API (Render)**: [https://portfolio-uf9x.onrender.com](https://portfolio-uf9x.onrender.com)

---

**Picture**

<img width="1919" height="970" alt="image" src="https://github.com/user-attachments/assets/2edb613b-5fde-44ee-9d3f-691af22800b9" />

## 🛠 Tech Stack

### 🔹 Frontend
- React.js (Vite)
- Tailwind CSS
- AOS (Animation on Scroll)
- React Tooltip
- React Confetti
- Responsive Design
- EmailJS (via Flask API)

### 🔹 Backend
- Flask (Python)
- Flask-CORS
- smtplib + EmailMessage
- Render Deployment (Backend API)

---

## 📁 Project Structure

Portfolio Project
This is a personal portfolio website showcasing my skills, projects, education, and achievements. It features a modern frontend built with Vite + React and a backend powered by Flask for handling contact form submissions. The project integrates React-Three-Fiber for 3D animations and uses Tailwind CSS for styling.
Project Structure
portfolio/                        # 🔥 Main Project Root Folder
│
├── server/                       # 🧠 Flask Backend (Contact API)
│   ├── __pycache__/              # Compiled Python files
│   │   └── main.cpython-39.pyc
│   ├── .env                      # Environment variables (private)
│   ├── .gitignore                # Ignore __pycache__, .env etc.
│   ├── app.py                    # Flask App Entry Point
│   └── requirements.txt          # Python package dependencies
│
├── client/                       # 🎨 Frontend (Vite + React)
│   ├── public/
│   │   ├── badges/
│   │   │   ├── e-learning/
│   │   │   ├── aws/
│   │   │   └── ...
│   │   ├── tech/                 # 🛠 Tech stack icons
│   │   │   ├── html5.svg
│   │   │   ├── css3.svg
│   │   │   └── ...
│   │   ├── icons/                # Social media and other UI icons
│   │   ├── models/
│   │   │   └── Animated.glb
│   │   ├── 3d avatar.glb
│   │   ├── vite.svg
│   │   ├── screenshots/
│   │   └── certificates/
│
│   ├── src/
│   │   ├── assets/
│   │   │   ├── profile.png
│   │   │   ├── resume.pdf
│   │   │   └── ...
│   │   ├── components/           # 🧩 Reusable Components
│   │   │   ├── ATSResumeMatcher.jsx
│   │   │   ├── BadgeCard.jsx
│   │   │   ├── InternshipCard.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── ParticlesBackground.jsx
│   │   │   ├── ProjectCard.jsx
│   │   │   ├── ProjectModal.jsx
│   │   │   ├── SocialLinks.jsx
│   │   │   └── ...
│   │   ├── pages/                # 📄 Pages (Sections)
│   │   │   ├── About.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── TechStack.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Certificates.jsx
│   │   │   ├── Education.jsx
│   │   │   ├── Internships.jsx
│   │   │   ├── Badges.jsx
│   │   │   └── Resume.jsx
│   │   ├── three/                # 🌌 3D-related React-Three-Fiber
│   │   │   ├── AnimatedCharacter.jsx
│   │   │   └── ConstellationCanvas2D.jsx
│   │   ├── App.jsx               # Root component with layout
│   │   └── main.jsx              # React DOM render entry
│
│   ├── App.css                   # Global app styles
│   ├── index.css                 # Tailwind and resets
│   ├── index.html                # HTML template
│   ├── tailwind.config.js        # Tailwind configuration
│   ├── postcss.config.js         # PostCSS config
│   └── vite.config.js            # Vite config
│
├── .gitignore                    # Git ignore rules for root
├── README.md                     # 📖 Project documentation
└── package.json                  # Frontend scripts and dependencies

---

## 🚀 Features

- 🎯 **Responsive Design** (Mobile, Tablet, Desktop)
- 📂 **Projects & Education** Timeline
- 🧠 **Internships**, **Certificates**, **Badges** sections
- 💻 **Technology Stack Grid** with tooltips and animation
- 📎 **Resume Section**
- 📬 **Contact Form** integrated with Flask backend and Gmail SMTP
- 🎉 **Confetti + Success Message** on form submission
- 🌐 **Frontend on Vercel**, **Backend on Render**

---

## 🔧 Installation & Running the Project Locally

### 1. Clone the repository

```bash
git clone https://github.com/UdayKumar9381/portfolio.git
cd portfolio

**Frontend Setup**
cd frontend
npm install
npm run dev

Runs the frontend React app at: http://localhost:5173

**Backend Setup (Flask)**
cd backend
pip install -r requirements.txt
python app.py

Runs the backend Flask server at: http://localhost:5000

**🔐 Environment Variables (for Backend)**
Create a .env file (or hardcode temporarily):
ADMIN_EMAIL=your-email@gmail.com
ADMIN_PASSWORD=your-app-password
⚠️ Note: Use Gmail App Passwords for security.

**🧪 Testing Contact Form**
Once both frontend and backend are deployed:
Go to Contact Me
Fill in the form.

Check the admin inbox and user inbox for confirmation emails.

**🧼 Lighthouse / Performance Checklist**
✅ Optimized SVGs
✅ Responsive Grid
✅ Lazy loaded animations
⚠️ You can further improve:
Compress images
Serve in next-gen formats (WebP)
Reduce unused CSS/JS in production

**📚 Learnings Over the Project**
From Day 1 to deployment:
Mastered React component structuring.
Used AOS and React Tooltip for polished animations.
Built a working backend using Flask and Gmail API.
Learned about SMTP, CORS, API routing, Vercel & Render deployment.
Improved performance, responsiveness, and animation skills.

**🤝 Acknowledgements**
Render & Vercel for free hosting
Open Source SVG Icons
React Confetti
React Tooltip
AOS

🧑‍💻 Author
👨‍💻 Narapureddi Uday Kumar
B.Tech (AI & ML) | Frontend + Backend Developer
📧 udayreddi28@gmail.com
🌐 [LinkedIn](https://www.linkedin.com/in/udayreddi28) | GitHub


---

Let me know if you'd like a **` dark/light toggle**, or automatic **scroll-to-section animation** for the README badges. I can add those too!
