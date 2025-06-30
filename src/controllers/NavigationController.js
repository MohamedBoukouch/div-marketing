// src/controllers/NavigationController.js
import { useState } from 'react';

const NavigationController = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navigateTo = (section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return { activeSection, navigateTo };
};

export { NavigationController };