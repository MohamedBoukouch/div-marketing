// components/Blog.js
import { useContext } from 'react';
import { DarkModeContext } from '../App';

const Blog = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <section className={`min-h-screen py-20 ${darkMode ? 'bg-[#121218]' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-6 text-center">
        <h1 className={`text-4xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Blog
        </h1>
        <div className={`w-24 h-1 mx-auto mb-8 ${darkMode ? 'bg-indigo-500' : 'bg-indigo-600'}`}></div>
        <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-12`}>
          Notre blog arrive bientôt avec des contenus experts en marketing digital.
        </p>
        <div className={`max-w-2xl mx-auto p-8 rounded-xl ${darkMode ? 'bg-[#1E1E2D]' : 'bg-white'} shadow-lg`}>
          <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Nous préparons des articles de qualité sur les dernières tendances digitales, 
            stratégies marketing et études de cas. Revenez bientôt !
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blog;