import { useState, useEffect, createContext } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export const DarkModeContext = createContext();

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-[#121218]' : 'bg-gray-50'}`}>
        <Header />
        <main>
          <Hero />
          <Services />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </DarkModeContext.Provider>
  );
}

export default App;