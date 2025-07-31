import React from "react";
import Tilt from "react-parallax-tilt";

const BadgeCard = ({ badge }) => (
  <Tilt
    glareEnable={true}
    glareMaxOpacity={0.3}
    scale={1.05}
    tiltMaxAngleX={10}
    tiltMaxAngleY={10}
    className="hover:scale-105 transition-all duration-300"
  >
    <div
      data-aos="flip-up"
      className="bg-gradient-to-br from-[#0e1f2e] to-[#07131f] border border-cyan-600 shadow-cyan-400/40 shadow-lg rounded-xl overflow-hidden backdrop-blur-md p-4 min-h-[280px] flex flex-col justify-between"
    >
      {/* Image Box */}
      <div className="h-[160px] flex items-center justify-center bg-white rounded-md mb-4 overflow-hidden">
        <img
          src={badge.img}
          alt={badge.title}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      {/* Text Info */}
      <div>
        <h3 className="text-cyan-300 font-bold text-sm text-center">{badge.title}</h3>
        <p className="text-xs text-gray-400 text-center mb-1">{badge.platform}</p>
        {badge.link && (
          <a
            href={badge.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-xs text-center text-cyan-400 hover:underline"
          >
            🔗 View Badge
          </a>
        )}
      </div>
    </div>
  </Tilt>
);

export default BadgeCard;
