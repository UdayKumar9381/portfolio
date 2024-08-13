
// src/components/HeroSection.js
import React from 'react';
import './HeroSection.css'; // To add specific styles later

function HeroSection() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h1>Welcome to my World</h1>
        <p>Seeking An Opportunity in a platform Where i can learn and Utilize My Skills</p>
        <a href="#contact" className="cta-button">Get in Touch</a>
      </div>
    </section>
  );
}

export default HeroSection;