import React, { useEffect, useState } from 'react'

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true)

  const handleNavClick = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

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
    { label: 'Contact', id: 'contact' }
  ]

  useEffect(() => {
    const handleMouseMove = (e) => {
      setIsVisible(e.clientY <= 100)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md text-white px-6 py-4 transition-transform duration-500 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <ul className="flex flex-wrap justify-center gap-6 text-md font-uday">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => handleNavClick(item.id)}
              className="hover:text-neonBlue transition duration-300"
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
