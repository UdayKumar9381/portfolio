import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import "animate.css";

const About = () => {
  const typedRef = useRef(null);
  const typedInstance = useRef(null);

  useEffect(() => {
    if (!typedRef.current) return;

    typedInstance.current = new Typed(typedRef.current, {
      strings: [
        "Full Stack Developer 💻",
        "AI-ML Enthusiast 🤖",
        "Tech Explorer 🚀",
        "Open Source Learner 🌍",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    return () => {
      typedInstance.current?.destroy();
    };
  }, []);

  // For background sparkles behind image only
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <section className="relative bg-[#0c1b26] text-white py-16 px-4 sm:px-8 overflow-hidden min-h-[100vh]">
      {/* Full BG particles (if needed) */}
      <Particles
        className="absolute top-0 left-0 w-full h-full z-0"
        options={{
          background: { color: "transparent" },
          fullScreen: { enable: false },
          particles: {
            number: { value: 40, density: { enable: true, area: 800 } },
            color: { value: "#00ffff" },
            shape: { type: "circle" },
            opacity: { value: 0.3 },
            size: { value: 2, random: true },
            move: {
              enable: true,
              speed: 0.4,
              direction: "none",
              outModes: { default: "out" },
            },
          },
        }}
      />

      {/* Grid Layout */}
      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center min-h-[100vh]">
        {/* 👤 Profile Image with Sparkles */}
        <div className="flex justify-center items-center relative w-full h-full">
          {/* Sparkle Particle Layer behind the image */}
          <Particles
            init={particlesInit}
            className="absolute w-[420px] h-[420px] z-0"
            options={{
              fullScreen: { enable: false },
              background: { color: "transparent" },
              particles: {
                number: { value: 25, density: { enable: true, area: 800 } },
                color: { value: "#00ffff" },
                shape: { type: "circle" },
                opacity: { value: 0.5 },
                size: { value: 1.2, random: true },
                move: {
                  enable: true,
                  speed: 0.2,
                  direction: "none",
                  outModes: { default: "out" },
                },
              },
            }}
          />

          {/* Profile Image */}
          <img
            src="/screenshots/uday.jpg"
            alt="Uday Kumar"
            className="z-10 w-80 h-80 md:w-[400px] md:h-[400px] object-cover rounded-full border-4 border-cyan-400 shadow-xl hover:shadow-cyan-500/50 transition duration-500 ease-in-out hover:scale-110 hover:rotate-1 animate__animated animate__zoomIn"
          />
        </div>

        {/* Bio */}
        <div className="space-y-5">
          <span
            ref={typedRef}
            className="text-cyan-300 text-xl font-semibold block h-8"
          ></span>

          <h2 className="text-4xl font-bold text-cyan-400">👋 About Me</h2>

          <p className="text-lg text-gray-300 leading-relaxed">
            I'm <span className="text-cyan-300 font-semibold">Narapureddi Uday Kumar</span>, currently pursuing B.Tech in CSE (AI & ML) at KIET-2. I’m passionate about impactful web apps, machine learning, and open source.
          </p>

          <p className="text-md text-gray-400">
            🧠 Worked 8 months on a real-world <span className="text-cyan-300 font-semibold">Hackathon Platform</span>, developing frontends, integrating chatbots, and improving UX.
          </p>

          <p className="text-md text-gray-400">
            🔍 Explored deep learning at IIITH as a <span className="text-cyan-300 font-semibold">Research Developer</span> (RNN, CNN, LSTM, time-series analysis).
          </p>

          <p className="text-md text-gray-400">
            🚀 Goal: Become a dynamic <span className="text-cyan-300 font-semibold">Software Developer</span> creating scalable, user-first tools in web & AI.
          </p>

          {/* Skills */}
          <div className="mt-6 bg-[#132736] p-6 rounded-xl border border-cyan-500 shadow-md hover:shadow-cyan-500/30 transition hover:-translate-y-1">
            <h3 className="text-xl font-semibold text-cyan-300 mb-3">🛠️ Skills & Experience</h3>
            <ul className="text-sm text-gray-300 leading-relaxed list-disc pl-5 space-y-1">
              <li>Frontend: React.js, HTML, CSS, JavaScript, TailwindCSS</li>
              <li>Backend: Node.js, Express.js, Firebase, REST APIs</li>
              <li>Programming: Python, Kotlin, C</li>
              <li>Machine Learning: Basics, RNN, CNN, LSTM</li>
              <li>Tools: Git, MongoDB, Postman, VS Code</li>
              <li>
                Internships:
                <ul className="pl-4 list-disc">
                  <li>Android Dev @ Eduskills</li>
                  <li>Python Programming @ Codsoft</li>
                </ul>
              </li>
              <li>Certifications: AICTE, IBM SkillBuild, HackerRank, Hackathons</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
