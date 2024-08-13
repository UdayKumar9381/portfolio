import React from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';
import CursorEffect from './components/CursorEffect';

function App() {
  return (
    <div className="App">
      <CursorEffect />
      <header className="App-header">
        <div className="name-container">
          {[...'UDAY KUMAR'].map((letter, index) => (
            <span
              key={index}
              className={`letter letter-${index}`}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {letter}
            </span>
          ))}
        </div>
        <div className="profile-pic-container">
          <img src="https://media.licdn.com/dms/image/D5603AQH7Dw3YaUecDQ/profile-displayphoto-shrink_400_400/0/1723367803321?e=1729123200&v=beta&t=6SMHLQDCV1RkIEFejH2J5XfrRUUezBFaXySYVRZOhWM" alt="Profile" />
        </div>
      </header>
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
    </div>
  );
}

export default App;