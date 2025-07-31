import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const techStack = [
  { name: "HTML5", icon: "/public/tech/html5.svg" },
  { name: "CSS3", icon: "/public/tech/css3.svg" },
  { name: "JavaScript", icon: "/public/tech/javascript.svg" },
  { name: "React.js", icon: "/public/tech/react.svg" },
  { name: "Node.js", icon: "/public/tech/Node.js.svg" },
  { name: "Express.js", icon: "/public/tech/express.svg" },
  { name: "MongoDB", icon: "/public/tech/mongodb.svg" },
  { name: "Python", icon: "/public/tech/python.svg" },
  { name: "Firebase", icon: "/public/tech/firebase.svg" },
  { name: "Kotlin", icon: "/public/tech/kotlin.svg" },
  { name: "Tailwind CSS", icon: "/public/tech/Tailwind CSS.svg" },
  { name: "Git", icon: "/public/tech/git.svg" },
  { name: "Figma", icon: "/public/tech/figma.svg" },
  { name: "Postman", icon: "/public/tech/postman.svg" },
  { name: "Vite js", icon: "/public/tech/Vite.js.svg" },
  { name: "NumPy", icon: "/public/tech/NumPy.svg" },
  { name: "Matplotlib", icon: "/public/tech/Matplotlib.svg" },
  { name: "Grafana", icon: "/public/tech/Grafana.svg" },
  { name: "Github", icon: "/public/tech/Github.svg" },
  { name: "Java", icon: "/public/tech/Java.svg" },
  { name: "Jupyter", icon: "/public/tech/Jupyter.svg" },
  { name: "Flask", icon: "/public/tech/Flask.svg" },
  { name: "Arduino", icon: "/public/tech/Arduino.svg" },
  { name: "AWS", icon: "/public/tech/AWS.svg" },
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

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 justify-items-center">
        {techStack.map((tech, idx) => (
          <div
            key={idx}
            data-aos="zoom-in"
            className="group relative transition transform hover:scale-150"
          >
            <img
  src={tech.icon}
  alt={tech.name}
  className={`w-18 h-18 md:w-20 md:h-20 rounded-lg shadow-md hover:shadow-cyan-600/70 transition-shadow duration-100 ${
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
