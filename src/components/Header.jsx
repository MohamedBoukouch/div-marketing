import { useState, useContext } from 'react';
import { DarkModeContext } from '../App';
import { FiSun, FiMoon } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Header = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  const [activeSection, setActiveSection] = useState('home');

  const navigateTo = (section) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`sticky top-0 z-50 shadow-sm ${darkMode ? 'bg-[#1E1E2D]' : 'bg-white'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className={`text-2xl font-bold ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>Div-Marketing</div>
        
        <nav className="hidden md:flex space-x-8 items-center hover: cursor-pointer">
          {['Services', 'Projets', 'Blog', 'Contact'].map((item) => (
            <button
              key={item}
              // to={item === 'Blog' ? '/blog' : `/#${item.toLowerCase()}`}
              onClick={() => navigateTo(item.toLowerCase())}
              className={`${
                activeSection === item.toLowerCase() 
                  ? darkMode ? 'text-indigo-400 font-medium' : 'text-indigo-600 font-medium'
                  : darkMode ? 'text-gray-300' : 'text-gray-600'
              } ${darkMode ? 'hover:text-indigo-300' : 'hover:text-indigo-500'} transition-colors hover:cursor-pointer`}
            >
              {item}
            </button>
          ))}
          
          
        </nav>
        
        <motion.button
            onClick={() => setDarkMode(!darkMode)}
            className={`ml-4 p-2 rounded-full flex items-center justify-center ${
              darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <motion.div
              key={darkMode ? 'light' : 'dark'}
              initial={{ rotate: -30 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              {darkMode ? (
                <FiSun className="w-5 h-5" />
              ) : (
                <FiMoon className="w-5 h-5" />
              )}
            </motion.div>
          </motion.button>
      </div>
    </header>
  );
};

export default Header;