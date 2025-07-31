import React, { useState } from 'react';
import axios from 'axios';

const ProgressBar = ({ score }) => (
  <div className="w-full bg-gray-700 rounded-full h-3 mb-2">
    <div
      className="bg-cyan-400 h-3 rounded-full transition-all duration-500"
      style={{ width: `${score}%` }}
    />
  </div>
);

const ATSResumeMatcher = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);

  const handleUpload = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post('http://localhost:8000/match-resume', formData);
      setResult(res.data);
    } catch (err) {
      alert("Error processing your resume!");
    }
  };

  return (
    <div className="p-6 bg-[#0c1b26] text-white min-h-screen">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-cyan-400">ATS Resume Matcher</h2>
        <p className="text-sm text-gray-300 mt-2">
          Upload your resume and see how it compares section-wise.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left: Upload & Results */}
        <div className="flex-1 bg-[#112a3a] p-6 rounded-lg shadow-xl">
          <input
            type="file"
            accept=".pdf"
            onChange={(e) => setFile(e.target.files[0])}
            className="mb-4 text-white"
          />

          <button
            onClick={handleUpload}
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded"
          >
            Upload Resume
          </button>

          {result && (
            <div className="mt-8">
              {Object.entries(result.sections).map(([section, data], index) => (
                <div key={index} className="mb-6">
                  <h3 className="text-xl font-bold text-cyan-300 mb-2 capitalize">
                    {section} Section
                  </h3>

                  <p className="text-sm mb-1">
                    <span className="text-gray-400">Alignment:</span>{' '}
                    <span className="text-green-400">{data.alignment}</span>
                  </p>

                  <p className="text-sm mb-1">
                    <span className="text-gray-400">Matched Keywords:</span>{' '}
                    {data.keywords_matched.length > 0 ? (
                      <span className="text-green-400">{data.keywords_matched.join(', ')}</span>
                    ) : (
                      <span className="text-red-400">None</span>
                    )}
                  </p>

                  <p className="text-sm text-gray-400 mb-1">
                    Required: {data.keywords_required.join(', ')}
                  </p>

                  <ProgressBar score={data.score} />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right: Score Summary */}
        {result && (
          <div className="flex-1 bg-[#112a3a] p-6 rounded-lg shadow-xl">
            <h3 className="text-2xl font-semibold text-cyan-400 mb-4">Section Scores</h3>
            {Object.entries(result.sections).map(([section, data], index) => (
              <div key={index} className="mb-3">
                <div className="flex justify-between text-sm text-gray-300">
                  <span className="capitalize">{section}</span>
                  <span className="text-cyan-300 font-semibold">{data.score}%</span>
                </div>
                <ProgressBar score={data.score} />
              </div>
            ))}

            <div className="mt-6 text-xl font-bold text-cyan-500">
              Overall Score: {result.overall_score}%
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ATSResumeMatcher;
