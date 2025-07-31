import React from "react";

const ProjectCard = ({ title, description, tech, media }) => {
  return (
    <div className="bg-[#0c1b26] border border-cyan-600 rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col">
      {/* Project Image */}
      {media && (
        <img
          src={media}
          alt={`${title} screenshot`}
          className="w-full h-40 object-cover rounded-lg mb-4"
        />
      )}

      {/* Title */}
      <h3 className="text-xl font-bold text-cyan-300 mb-2">{title}</h3>

      {/* Description (clamped) */}
      <p className="text-gray-400 text-sm mb-3 line-clamp-3">{description}</p>

      {/* Tech Stack */}
      <div className="mt-auto flex flex-wrap gap-2 pt-3">
        {tech.map((t, idx) => (
          <span
            key={idx}
            className="text-xs bg-gray-700 border border-cyan-600 px-2 py-1 rounded"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
