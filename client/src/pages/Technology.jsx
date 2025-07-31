import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const techStack = [
  { name: "HTML5", icon: "/tech/HTML5.svg" },
  { name: "CSS3", icon: "/tech/CSS3.svg" },
  { name: "JavaScript", icon: "/tech/JavaScript.svg" },
  { name: "React.js", icon: "/tech/React.svg" },
  { name: "Node.js", icon: "/tech/Node.js.svg" },
  { name: "Express.js", icon: "/tech/Express.svg" },
  { name: "MongoDB", icon: "/tech/MongoDB.svg" },
  { name: "Python", icon: "/tech/Python.svg" },
  { name: "Firebase", icon: "/tech/Firebase.svg" },
  { name: "Kotlin", icon: "/tech/Kotlin.svg" },
  { name: "Tailwind CSS", icon: "/tech/Tailwind CSS.svg" },
  { name: "Git", icon: "/tech/Git.svg" },
  { name: "Figma", icon: "/tech/Figma.svg" },
  { name: "Postman", icon: "/tech/Postman.svg" },
  { name: "Vite js", icon: "/tech/Vite.js.svg" },
  { name: "NumPy", icon: "/tech/NumPy.svg" },
  { name: "Matplotlib", icon: "/tech/Matplotlib.svg" },
  { name: "Grafana", icon: "/tech/Grafana.svg" },
  { name: "Github", icon: "/tech/GitHub.svg" },
  { name: "Java", icon: "/tech/Java.svg" },
  { name: "Jupyter", icon: "/tech/Jupyter.svg" },
  { name: "Flask", icon: "/tech/Flask.svg" },
  { name: "Arduino", icon: "/tech/Arduino.svg" },
  { name: "AWS", icon: "/tech/AWS.svg" },
];


const TechStack = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="py-14 px-6 max-w-7xl mx-auto text-white">
      <h1 className="text-4xl font-bold text-center text-cyan-200 mb-11">
        🧰 My Technology Stack
      </h1>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 place-items-center">
  {techStack.map((tech, idx) => (
    <div
      key={idx}
      data-aos="zoom-in"
      className="group relative hover:scale-110 transition-transform duration-300 ease-in-out"
    >
      <img
        src={tech.icon}
        alt={tech.name}
        className={`w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain hover:shadow-cyan-500/50 rounded-lg ${
          idx % 2 === 0 ? "animate-floatUp" : "animate-floatDown"
        }`}
        data-tooltip-id={`tooltip-${idx}`}
        data-tooltip-content={tech.name}
      />
      <Tooltip id={`tooltip-${idx}`} place="top" effect="solid" />
    </div>
  ))}
</div>

    </div>
  );
};

export default TechStack;
