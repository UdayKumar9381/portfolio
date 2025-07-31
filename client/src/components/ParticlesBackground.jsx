// src/components/ParticlesBackground.jsx
import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: {
          color: { value: "transparent" },
        },
        fpsLimit: 60,
        interactivity: {
          detectsOn: "canvas",
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
              // Only repulse if hovering near image area (using transparent div later)
            },
          },
          modes: {
            repulse: {
              distance: 150,
              duration: 0.4,
            },
          },
        },
        particles: {
          number: {
            value: 60,
            density: { enable: true, area: 900 },
          },
          color: { value: "#00ffff" },
          shape: { type: "circle" },
          opacity: { value: 0.6 },
          size: { value: 3, random: true },
          links: {
            enable: true,
            distance: 120,
            color: "#00ffff",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            outMode: "out",
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
