// Navbar.tsx
import { FaHome, FaUser, FaCog, FaBriefcase, FaEnvelope } from 'react-icons/fa';

export const Navbar = () => {
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
  <div className="fixed top-0 left-0 z-50 flex items-center justify-between px-10 py-2 bg-white/10 backdrop-blur-md rounded-xl shadow-md w-full">
    {/* Logo */}
    <div className="w-10">
      <img src="/vite.svg" alt="Profile" className="w-full" />
    </div>

    {/* Nav Items */}
    <div className="flex space-x-10">
      <button
        onClick={() => handleScroll('home')}
        className="text-white flex items-center space-x-2 hover:text-blue-300"
      >
        <FaHome size={18} color="white" />
        <span>Home</span>
      </button>

      <button
        onClick={() => handleScroll('about')}
        className="text-white flex items-center space-x-2 hover:text-blue-300"
      >
        <FaUser size={18} color="white" />
        <span>About</span>
      </button>

      <button
        onClick={() => handleScroll('skills')}
        className="text-white flex items-center space-x-2 hover:text-blue-300"
      >
        <FaCog size={18} color="white" />
        <span>Skills</span>
      </button>

      <button
        onClick={() => handleScroll('projects')}
        className="text-white flex items-center space-x-2 hover:text-blue-300"
      >
        <FaBriefcase size={18} color="white" />
        <span>Projects</span>
      </button>

      <button
        onClick={() => handleScroll('contact')}
        className="text-white flex items-center space-x-2 hover:text-blue-300"
      >
        <FaEnvelope size={18} color="white" />
        <span>Contact</span>
      </button>
    </div>
  </div>
);

};
