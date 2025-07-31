import React from 'react';
import resumePDF from '../assets/your_resume.pdf'; // make sure this path is correct

const Resume = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto text-white">
      <h1 className="text-4xl font-bold text-cyan-400 mb-8 text-center">
        📄 My Resume
      </h1>

      {/* === Resume Preview === */}
      <div className="bg-[#112233] p-6 rounded-lg shadow-lg mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-white">🔍 Resume Preview</h2>

        <div className="w-full h-[600px] border border-cyan-600 rounded-lg overflow-hidden mb-4">
          <iframe
            src={resumePDF}
            title="Uday Resume Preview"
            className="w-full h-full"
            frameBorder="0"
          ></iframe>
        </div>

        <div className="flex justify-center">
          <a
            href={resumePDF}
            download="NARAPUREDDI_UDAY_KUMAR_RESUME.pdf"
            className="bg-cyan-500 hover:bg-cyan-700 text-white px-6 py-2 rounded text-lg font-semibold"
          >
            ⬇️ Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
