import React from 'react';
import { FaTimes, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectModal = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex justify-center items-center px-4 py-8">
      <div className="relative bg-[#0f1a2b] max-w-3xl w-full rounded-xl shadow-xl text-white border border-cyan-600 overflow-y-auto max-h-[90vh] p-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl text-cyan-400 hover:text-red-400"
        >
          <FaTimes />
        </button>

        <h2 className="text-3xl font-bold text-cyan-400 mb-2">{project.title}</h2>
        <p className="text-sm text-gray-400 mb-4 italic">{project.duration} • {project.type}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t, i) => (
            <span key={i} className="text-xs bg-gray-700 border border-cyan-600 px-2 py-1 rounded">
              {t}
            </span>
          ))}
        </div>

        {/* Full Description */}
        <p className="text-gray-300 mb-6">{project.fullDescription}</p>

        {/* Media */}
        {project.media && (
          <div className="mb-6">
            {project.media.endsWith('.mp4') ? (
              <video src={project.media} controls className="rounded w-full" />
            ) : (
              <img src={project.media} alt="Project visual" className="rounded w-full" />
            )}
          </div>
        )}

        {/* Links */}
        <div className="flex gap-6 mt-4 text-cyan-400 text-lg">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white">
              <FaGithub /> GitHub
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white">
              <FaExternalLinkAlt /> Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
