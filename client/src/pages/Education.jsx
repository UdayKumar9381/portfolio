import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaUniversity, FaSchool } from "react-icons/fa";

import collegeIdCard from "../assets/college_id.png"; // Replace with your actual path
import intermediateCert from "../assets/intermediate_cert.jpg"; // Replace with your actual path
import schoolCert from "../assets/school_cert.jpg"; // Replace with your actual path

const educationData = [
  {
    title: "B.Tech in CSE (AI & ML)",
    institute: "Kakinada Institute of Engineering & Technology-2",
    year: "2022 – 2026",
    score: "70.9%",
    icon: <FaGraduationCap className="text-white text-xl" />,
    detailsImg: collegeIdCard,
    link: "http://61.1.171.141/kiet/main1.asp?ht=226Q1A4229&su=++OK+++++",
    link: "https://www.kietgroup.info/Student/DashBoard"
  },
  {
    title: "Intermediate – MPC",
    institute: "Sree Ram Junior College",
    year: "2020 – 2022",
    score: "70%",
    icon: <FaUniversity className="text-white text-xl" />,
    detailsImg: intermediateCert,
  },
  {
    title: "10th Standard (SSC)",
    institute: "Sri Ravi Teja E.M. High School",
    year: "2019 – 2020",
    score: "98%",
    icon: <FaSchool className="text-white text-xl" />,
    detailsImg: schoolCert,
  },
];

const EducationSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDetails = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const hoverEffect = {
    scale: 1.02,
    boxShadow: "0 10px 25px -5px rgba(0, 255, 255, 0.3)",
    transition: { duration: 0.3 },
  };

  return (
    <section id="education" className="bg-[#0c1b26] text-white py-20 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-4xl font-bold text-cyan-400 text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          📚 Education Timeline
        </motion.h2>

        <motion.div 
          className="relative border-l-2 border-cyan-500 pl-8 space-y-12"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              className="relative group"
              variants={item}
              whileHover={hoverEffect}
              onClick={() => toggleDetails(idx)}
            >
              {/* Animated icon */}
              <motion.div 
                className="absolute -left-10 top-0 bg-cyan-500 p-2 rounded-full shadow-lg"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {edu.icon}
              </motion.div>

              {/* Main Card */}
              <motion.div 
                className="bg-[#132736] p-6 rounded-lg border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 relative overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                
                <h3 className="text-xl font-semibold text-cyan-300 mb-1">{edu.title}</h3>
                <p className="text-gray-300 mb-1">{edu.institute}</p>
                <p className="text-sm text-gray-400 mb-2">{edu.year}</p>
                <motion.p 
                  className="text-sm font-medium mt-2 inline-block"
                  initial={{ color: "#4ade80" }}
                  whileHover={{ color: "#22d3ee", scale: 1.05 }}
                >
                  📈 {edu.score}
                </motion.p>

                {/* Connector line */}
                {idx !== educationData.length - 1 && (
                  <motion.div 
                    className="absolute -bottom-6 left-0 w-0.5 h-6 bg-cyan-500"
                    initial={{ height: 0 }}
                    animate={{ height: 24 }}
                    transition={{ delay: 0.4 + idx * 0.1, duration: 0.6 }}
                  />
                )}
              </motion.div>

              {/* Details Panel */}
              {openIndex === idx && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-4 ml-6 bg-[#1c354a] border border-cyan-400/20 p-4 rounded-lg"
                >
                  <img
                    src={edu.detailsImg}
                    alt={`${edu.title} Document`}
                    className="w-full max-w-md rounded shadow-lg mb-4"
                  />
                  <a
                    href={edu.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-300 underline font-semibold hover:text-cyan-400"
                  >
                    🔗 View Full Document / College Site
                  </a>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
