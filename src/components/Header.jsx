import { useState, useContext } from 'react';
import { DarkModeContext } from '../App';

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
        <div className={`text-2xl font-bold ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>DIV-Marketing</div>
        
        <nav className="hidden md:flex space-x-8 items-center">
          {['Services', 'Projets', 'Blog', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => navigateTo(item.toLowerCase())}
              className={`${
                activeSection === item.toLowerCase() 
                  ? darkMode ? 'text-indigo-400 font-medium' : 'text-indigo-600 font-medium'
                  : darkMode ? 'text-gray-300' : 'text-gray-600'
              } ${darkMode ? 'hover:text-indigo-300' : 'hover:text-indigo-500'} transition-colors`}
            >
              {item}
            </button>
          ))}
          
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className={`ml-4 p-2 rounded-full ${darkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-200 text-gray-700'}`}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </nav>
        
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md transition-colors">
          Devis Gratuit
        </button>
      </div>
    </header>
  );
};

export default Header;