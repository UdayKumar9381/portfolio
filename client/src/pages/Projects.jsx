import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleCardClick = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const projectList = [
    {
      title: "HackTrack – Hackathon Platform",
      description: "A powerful platform to manage college-level hackathons...",
      fullDescription: "HackTrack is a full-stack web application that streamlines the process of organizing, managing, and participating in hackathons. The platform supports multiple user roles including students, colleges, and hosts. It includes a powerful dashboard system, email-based registration, certificate generation, and dynamic scoreboard.",
      tech: ["React.js", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
      demo: "https://hacktrack-ten.vercel.app",
      github: "https://github.com/UdayKumar9381/Hacktrack",
      duration: "8-Month Internship",
      type: "Full Stack",
      media: "/screenshots/hacktrack.png" // or video like "/videos/hacktrack.mp4"
      
    },
    {
      title: "AI Extracurricular Assistant",
      description: "AI-powered school tool for structured activity planning...",
      fullDescription: "Built for Teach For India fellows, this AI-powered web app enables structured extracurricular learning in under-resourced schools. Includes chatbot, timers, grouping, and feedback modules.",
      tech: ["React", "Express", "MongoDB", "Tailwind"],
      github: "https://github.com/RCTS-K-Hub/WI2024-Team9",
      demo: null,
      duration: "1-Month Internship",
      type: "AI + Frontend",
      media: "/screenshots/tafea.png"
    },
    {
  title: "Note Taking Web App",
  description: "Write, edit, delete and store your notes with React state and local storage.",
  fullDescription: "A dynamic web application where users can write, save, and manage notes efficiently. The project highlights component-based architecture and state management with React. Local storage is used to preserve data between sessions.",
  tech: ["React.js", "JavaScript"],
  github: "https://github.com/udayreddi28/note-taking-app",
  demo: null,
  duration: "Solo Project",
  type: "Frontend",
  media: "/screenshots/note-app.png"  // Replace with actual image path
},
{
  title: "Food Tree Restaurant Website",
  description: "Static restaurant website with multiple pages and clean UI. Built as team leader for a college program.",
  fullDescription: `"Food Tree" is a static restaurant website built during the 2nd year of B.Tech as part of the ProjectNest Program. As the leader of Team 2 (6 members), I coordinated development, task assignments, and design strategy. The website includes a homepage, login/registration, menu (veg/non-veg), order & payment forms, contact, about, and a thank-you page. Fully responsive and well-structured.`,
  tech: ["HTML", "CSS"],
  github: "https://github.com/UdayKumar9381/project-nest",
  demo: null,
  duration: "2-Month Program",
  type: "Static UI",
  media: "/screenshots/foodtree.png" // Replace with actual image path
}
  // Add other projects similarly...
  ];
    

  return (
    <div className="p-6 max-w-6xl mx-auto text-white">
      <h1 className="text-4xl font-bold text-cyan-400 text-center mb-6">🛠️ My Projects</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projectList.map((proj, index) => (
          <div key={index} onClick={() => handleCardClick(proj)} className="cursor-pointer">
            <ProjectCard {...proj} />
          </div>
        ))}
      </div>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        project={selectedProject}
      />
    </div>
  );
};

export default Projects;
