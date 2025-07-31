import React from 'react'
import { FaLinkedin, FaGithub, FaXTwitter, FaInstagram, FaRedditAlien, FaQuora } from 'react-icons/fa6'

const links = [
  {
    icon: <FaLinkedin size={22} />,
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/narapureddi-uday-kumar-523551262/',
    color: 'hover:text-blue-400'
  },
  {
    icon: <FaGithub size={22} />,
    label: 'GitHub',
    url: 'https://github.com/UdayKumar9381',
    color: 'hover:text-white'
  },
  {
    icon: <FaXTwitter size={22} />,
    label: 'X',
    url: 'https://x.com/udayreddi28',
    color: 'hover:text-gray-300'
  },
  {
    icon: <FaInstagram size={22} />,
    label: 'Instagram',
    url: 'https://www.instagram.com/prefrontel_cortex/',
    color: 'hover:text-pink-500'
  },
  {
    icon: <FaRedditAlien size={22} />,
    label: 'Reddit',
    url: 'https://www.reddit.com/user/No-Worker-1998/',
    color: 'hover:text-orange-400'
  },
  {
    icon: <FaQuora size={22} />,
    label: 'Quora',
    url: 'https://www.quora.com/profile/NARAPUREDDI-UDAY-KUMAR',
    color: 'hover:text-red-500'
  },
]

const SocialLinks = () => {
  return (
    <div className="hidden md:flex flex-col fixed top-[35%] left-0 z-40">
      <ul>
        {links.map(({ icon, label, url, color }, index) => (
          <li key={index} className={`group flex items-center bg-black px-2 py-2 text-white hover:ml-2 transition-all duration-300 cursor-pointer`}>
            <a href={url} className={`flex items-center gap-2 ${color}`} target="_blank" rel="noreferrer">
              {icon}
              <span className="hidden group-hover:inline text-sm transition-opacity duration-300">{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SocialLinks
