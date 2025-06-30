import { useContext } from 'react';
import { DarkModeContext } from '../App';

const projects = [
  {
    id: 1,
    title: "FinTech Revolution App",
    description: "Application bancaire nouvelle génération avec technologie de pointe.",
    stats: [
      { label: "Users", value: "2M+" },
      { label: "Rating", value: "4.8" },
      { label: "Downloads", value: "5M+" }
    ]
  },
  {
    id: 2,
    title: "E-commerce Luxury Platform",
    description: "Plateforme e-commerce haut de gamme avec AR/VR.",
    stats: [
      { label: "Conversion", value: "+340%" },
      { label: "Traffic", value: "+250%" },
      { label: "Users", value: "500K+" }
    ]
  }
];

const Projects = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <section id="projects" className={`py-20 ${darkMode ? 'bg-[#121218]' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-6">
        <h2 className={`text-3xl font-bold text-center mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Projets Exceptionnels</h2>
        <p className={`text-xl text-center max-w-3xl mx-auto mb-16 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Découvrez nos réalisations les plus remarquables.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className={`rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow ${darkMode ? 'bg-[#1E1E2D]' : 'bg-white'}`}>
              <div className="h-48 bg-gradient-to-r from-indigo-400 to-purple-500"></div>
              <div className="p-6">
                <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>{project.title}</h3>
                <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{project.description}</p>
                
                <div className="mb-6">
                  {project.stats.map((stat, i) => (
                    <div key={i} className={`flex justify-between py-2 ${darkMode ? 'border-gray-600' : 'border-gray-100'} border-b`}>
                      <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{stat.label}</span>
                      <span className={darkMode ? 'text-indigo-400' : 'text-indigo-600'}>{stat.value}</span>
                    </div>
                  ))}
                </div>
                
                <button className={`font-bold flex items-center ${darkMode ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-800'} transition-colors`}>
                  Voir le Projet Complet →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;