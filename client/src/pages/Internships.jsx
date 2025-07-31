import React, { useState } from "react";
import InternshipCard from "../components/InternshipCard";

const internshipsData = [
  {
    role: "Research Intern (IoT & LSTM)",
    company: "RCTS, IIIT-Hyderabad",
    duration: "May 2025 – Aug 2025",
    type: "On-site",
    image: "/screenshots/LSTM.jpeg",
    description: "Research Intern – IIIT-Hyderabad (CSG Labs) Duration: May 2025 – [Month you discontinued, e.g., July 2025] Worked on implementing LSTM-based time series models as part of an IoT-focused research project. Due to the unavailability of assigned projects within the lab during my tenure, absence of a dedicated TA for guidance, and limited availability of the supervising professor because of academic commitments, I decided to discontinue the internship. However, I gained valuable experience in self-learning and initiating research in time series forecasting. ",
    linkedin: "https://www.linkedin.com/posts/narapureddi-uday-kumar-523551262_time-series-model-activity-7346116301645352960-Y3j5?utm_source=share&utm_medium=member_desktop&rcm=ACoAAECCOqsBY_UnaiOOrTBPL5NK5_9oADb5TLI"
  },
  {
    role: "Junior Developer – HackTrack Project",
    company: "K-HUB (KIET) + RCTS, IIIT-H",
    duration: "Aug 2024 – Apr 2025",
    type: "Remote",
    image: "/screenshots/hacktrack.png",
    description: "Contributed as a Junior Developer to the HackTrack project, a centralized platform for managing hackathons and developer engagement. Involved in building features like registration, participant management, and submissions using React, Node.js, and Firebase. Collaborated remotely with a team through GitHub and Figma.",
    linkedin: "https://www.linkedin.com/posts/narapureddi-uday-kumar-523551262_internship-khub-kiet-activity-7321256340960489474-3i3q?utm_source=share&utm_medium=member_desktop&rcm=ACoAAECCOqsBY_UnaiOOrTBPL5NK5_9oADb5TLI"
  },
  {
    role: "Research Intern – Extracurricular Assistant",
    company: "RCTS, IIIT-Hyderabad (Winter Internship)",
    duration: "Dec 2024 – Jan 2025",
    type: "On-site",
    image: "/screenshots/tafea.png",
    description: "Developed an AI-powered recommendation system for extracurricular student activity mapping using collaborative filtering. Helped increase participation by 35% by matching student interests with available clubs and events. Gained experience working with faculty and student data in a real-time research environment.",
    linkedin: "https://www.linkedin.com/posts/narapureddi-uday-kumar-523551262_researchinternship-iiithyderabad-techforgood-activity-7321270417397112832-_JXa"
  },
  {
    role: "AI-ML Intern – AWS Academy",
    company: "EduSkills",
    duration: "Apr 2025 – Jun 2025",
    type: "Remote",
    image: "/screenshots/aws.png",
    description: "Implemented and deployed machine learning models using AWS SageMaker pipelines. Focused on automation, scalability, and reliability of ML systems. Achieved 95% service uptime and improved model performance monitoring with integrated logging and metrics.",
    linkedin: "https://www.linkedin.com/posts/narapureddi-uday-kumar-523551262_awsacademy-machinelearning-artificialintelligence-activity-7344339065284018178--106"
  },
  {
    role: "AI-ML Intern – Google for Developers",
    company: "EduSkills",
    duration: "Jan 2025 – Mar 2025",
    type: "Remote",
    image: "/screenshots/google.png",
    description: "Built and trained TensorFlow-based deep learning models for image classification tasks using custom datasets. Achieved 89% accuracy on unseen data and enhanced skills in CNN architectures, data preprocessing, and model evaluation.",
    linkedin: "https://www.linkedin.com/posts/narapureddi-uday-kumar-523551262_artificialintelligence-machinelearning-eduskills-activity-7344336594230775808-ZNf3"
  },
  {
    role: "Java Full Stack Intern",
    company: "EduSkills",
    duration: "Oct 2024 – Dec 2024",
    type: "Remote",
    image: "/screenshots/java.png",
    description: "Developed a full-stack web application for an e-learning platform serving 10,000+ users. Built backend APIs with Spring Boot and integrated them with a React.js frontend. Implemented authentication, dashboard analytics, and real-time updates.",
    linkedin: "https://www.linkedin.com/posts/narapureddi-uday-kumar-523551262_javafullstack-eduskills-aicte-activity-7344335864619024386-4w8K"
  },
  {
    role: "Android Developer Intern",
    company: "EduSkills",
    duration: "Jul 2024 – Sep 2024",
    type: "Remote",
    image: "/screenshots/Andriod_Developers.png",
    description: "Built Android applications using Jetpack Compose and MVVM architecture. Focused on UI/UX design to improve user interaction, resulting in a 25% increase in engagement. Integrated APIs, local storage, and navigation components.",
    linkedin: "https://www.linkedin.com/posts/narapureddi-uday-kumar-523551262_androiddevelopment-virtualinternship-eduskills-activity-7344335061976010752-kD7X"
  },
  {
    role: "AI Intern – Summer of AI",
    company: "Swecha Foundation",
    duration: "May 2024 – Jun 2024",
    type: "Remote",
    image: "/screenshots/swecha.png",
    description: "Contributed to open-source AI/ML projects focused on social impact. Developed Telugu NLP tools and computer vision modules. Collaborated with other interns to explore AI use-cases in regional language processing and healthcare datasets.",
    linkedin: "https://www.linkedin.com/in/narapureddi-uday-kumar-523551262/"
  },
  {
    role: "Python Programming Intern",
    company: "CodSoft",
    duration: "Oct 2023 – Nov 2023",
    type: "Remote",
    image: "/screenshots/codsoft.png",
    description: "Completed multiple projects using core Python including a task manager, weather app, and calculator. Gained strong understanding of OOP, file handling, GUI with Tkinter, and API integration through hands-on mini-projects.",
    linkedin: "https://www.linkedin.com/posts/narapureddi-uday-kumar-523551262_python-codsoftinternship-programming-activity-7128452740317409280-hRrL"
  },
];

const InternshipsData = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleCards = showAll ? internshipsData : internshipsData.slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl text-cyan-400 font-bold text-center mb-6" data-aos="fade-down">
  🚀 Tech Odyssey: My Internship Chronicles
    </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleCards.map((internship, index) => (
          <InternshipCard key={index} {...internship} />
        ))}
      </div>

      {internshipsData.length > 3 && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300"
          >
            {showAll ? "Show Less" : "Show All"}
          </button>
        </div>
      )}
    </div>
  );
};

export default InternshipsData;