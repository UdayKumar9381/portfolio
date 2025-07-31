import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const InternshipCard = ({ role, company, duration, type, image, description, linkedin }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative h-[420px] w-full rounded-xl overflow-hidden shadow-md border border-cyan-600 bg-[#0c1b26]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: isHovered ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side */}
        <div
          className="absolute inset-0 p-4 text-center flex flex-col"
          style={{ backfaceVisibility: "hidden" }}
        >
          {image && (
            <img
              src={image}
              alt={role}
              className="w-full h-48 object-cover rounded-lg mb-4 border border-cyan-600"
            />
          )}
          <h3 className="text-lg font-bold text-cyan-300 line-clamp-2">{role}</h3>
          <p className="text-sm text-gray-400 mt-1">{company}</p>
          <p className="text-xs text-gray-500 mt-1">{duration} • {type}</p>
        </div>

        {/* Back Side */}
        <div
          className="absolute inset-0 p-4 flex flex-col justify-center bg-[#0c1b26] text-white"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <h3 className="text-base font-semibold text-cyan-300 line-clamp-1">{role}</h3>
          <p className="text-sm text-gray-300 mt-2 mb-4 line-clamp-5 flex-grow">{description}</p>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-cyan-400 self-end text-sm"
          >
            <FaLinkedin className="text-base" />
            <span>View Post</span>
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default InternshipCard;