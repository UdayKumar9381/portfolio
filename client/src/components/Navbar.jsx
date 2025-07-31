import React, { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleNavClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileOpen(false); // Close menu after clicking
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Education', id: 'education' },
    { label: 'Internships', id: 'internships' },
    { label: 'Certificates', id: 'certificates' },
    { label: 'Badges', id: 'badges' },
    { label: 'Tech Stack', id: 'techstack' },
    { label: 'Resume', id: 'resume' },
    { label: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setIsVisible(e.clientY <= 100);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md text-white px-6 py-4 transition-transform duration-500 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold text-cyan-400">UDAY</h1>

        {/* Hamburger Icon */}
        <div className="sm:hidden">
          <button onClick={() => setIsMobileOpen(!isMobileOpen)} className="text-white text-2xl">
            {isMobileOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden sm:flex flex-wrap justify-center gap-6 text-sm font-uday">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavClick(item.id)}
                className="hover:text-cyan-300 transition duration-300"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <ul className="sm:hidden mt-4 flex flex-col gap-4 text-center font-semibold text-md">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavClick(item.id)}
                className="hover:text-cyan-400 transition duration-300"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
