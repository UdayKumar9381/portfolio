import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, Html } from '@react-three/drei';

import About from './About';
import Projects from './Projects';
import Education from './Education';
import Internships from './Internships';
import Certificates from './Certificates';
import Badges from './Badges';
import Technology from './Technology';
import Resume from './Resume';
import Contact from './Contact';

import ConstellationCanvas2D from '../three/ConstellationCanvas2D';
import AnimatedCharacter from '../three/AnimatedCharacter'; // Only animated character used

const Home = () => {
  const fullName = 'NARAPUREDDI UDAY KUMAR';
  const [displayName, setDisplayName] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayName((prev) => prev + fullName[index]);
      setIndex((i) => i + 1);
    }, 120);

    if (index >= fullName.length) clearInterval(interval);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="flex flex-col min-h-screen pt-24">
      <main className="flex-grow">
        {/* 🔥 Home Section */}
        <section
          id="home"
          className="relative w-full h-screen overflow-hidden flex items-center justify-center px-8"
        >
          <ConstellationCanvas2D />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-hacker text-neonBlue tracking-widest mb-4 animate-glow">
                {displayName}
              </h1>
              <h2 className="text-2xl font-sci text-white mb-2">
                Welcome to my portfolio
              </h2>
              <p className="font-pixel text-sm text-gray-300 mb-4">
                Hello, I’m Uday – A passionate developer 🚀
              </p>
            </div>

            <div className="flex-1 flex justify-center items-center h-[650px] w-full md:h-[700px]">
              <Canvas camera={{ position: [0, 2, 5], fov: 40 }}>
                <ambientLight intensity={1.2} />
                <directionalLight position={[2, 5, 2]} intensity={1.2} />
                <Suspense fallback={<Html>Loading Character...</Html>}>
                  <AnimatedCharacter />
                  <OrbitControls enableZoom={false} />
                </Suspense>
              </Canvas>
            </div>
          </div>
        </section>

        {/* 🔗 Other Sections */}
        <section id="about" className="py-16"><About /></section>
        <section id="projects" className="py-16"><Projects /></section>
        <section id="education" className="py-16"><Education /></section>
        <section id="internships" className="py-16"><Internships /></section>
        <section id="certificates" className="py-16"><Certificates /></section>
        <section id="badges" className="py-16"><Badges /></section>
        <section id="techstack" className="py-16"><Technology /></section>
        <section id="resume" className="py-16"><Resume /></section>
        <section id="contact" className="py-16"><Contact /></section>
      </main>
    </div>
  );
};

export default Home;
