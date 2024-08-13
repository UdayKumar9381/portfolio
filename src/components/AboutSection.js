// src/components/AboutSection.js
import React from 'react';
import './AboutSection.css'; // To add specific styles later

function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIeMChr0G8hFPsxS0Bt4a2ZJT0YEY7V548WN8CwdhUGO50LQu4yqHrCamK23BSYyJkyuc&usqp=CAU" alt="" className="profile-photo" />
        <div className="about-text">
          <h2>About Me</h2>
          <p>Hello! I'm Uday Kumar, a passionate and versatile developer specializing in frontend and backend development. With a strong foundation in FastAPI, React, and MongoDB, I enjoy creating intuitive and efficient web applications. My journey in tech began with a fascination for how things work, leading me to explore various programming languages and frameworks.

Over the years, I've honed my skills in building responsive and user-friendly interfaces, ensuring seamless user experiences. Whether it's crafting dynamic UIs or developing robust backend systems, I strive to deliver high-quality, scalable solutions. My portfolio showcases a range of projects, from simple note-taking apps to complex web applications, reflecting my commitment to continuous learning and innovation.

When I'm not coding, I love diving into the latest tech trends, experimenting with new tools, and contributing to open-source projects. I'm always eager to collaborate on exciting projects and explore new opportunities.

Let's connect and create something amazing together!</p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
