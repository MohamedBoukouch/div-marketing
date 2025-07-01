import { useContext } from 'react';
import { DarkModeContext } from '../App';

const Footer = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <footer className={`w-full ${darkMode ? 'bg-[#0f172a]' : 'bg-gray-100'} py-16`}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand Column */}
          <div className="md:col-span-4">
            <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              DIV-Marketing
            </h2>
            <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Agence Marketing Digital Premium.
            </p>
            <p className={`mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Nous transformons les entreprises grâce à des solutions digitales innovantes et des stratégies marketing révolutionnaires.
            </p>
            <div className={`inline-block px-6 py-3 rounded-lg font-medium ${
              darkMode ? 'bg-blue-600 text-white' : 'bg-gray-800 text-white'
            }`}>
              Mobile Premium
            </div>
          </div>

          {/* Services Column */}
          <div className="md:col-span-3">
            <h3 className={`text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Services Premium
            </h3>
            <ul className="space-y-4">
              {['Mobile Premium', 'Web Avancé', 'Design Innovation', 'Social Media Pro', 'Consulting Digital'].map((service) => (
                <li key={service}>
                  <a href="#" className={`block py-2 hover:underline ${
                    darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div className="md:col-span-3">
            <h3 className={`text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Resources
            </h3>
            <ul className="space-y-4">
              {['Blog Expert', 'Case Studies', 'Guides Premium', 'Webinaires', 'Newsletter'].map((resource) => (
                <li key={resource}>
                  <a href="#" className={`block py-2 hover:underline ${
                    darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}>
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-2">
            <h3 className={`text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Contact Rapide
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className={`block py-2 hover:underline ${
                  darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                }`}>
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="#" className={`block py-2 hover:underline ${
                  darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                }`}>
                  Email Premium
                </a>
              </li>
              <li>
                <a href="#" className={`block py-2 hover:underline ${
                  darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                }`}>
                  Appel Direct
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className={`border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'} mt-16 pt-8 text-center`}>
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            © 2024 DIV-Marketing. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;