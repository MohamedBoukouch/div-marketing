import { useContext, useState } from 'react';
import { DarkModeContext } from '../App';
import { FiArrowRight, FiLayers, FiSmartphone, FiCode, FiPieChart } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { ProjectModel } from '../models/ProjectModel';

// Import your images (adjust paths as needed)
import fintechImage from '../assets/sliders/slide1.jpeg';
import ecommerceImage from '../assets/sliders/slide2.png'; // Add your e-commerce image

const Projects = () => {
  const { darkMode } = useContext(DarkModeContext);
  const [typeFilter, setTypeFilter] = useState('all');
  
  // Enhance projects with proper image imports
  const allProjects = ProjectModel.getProjects().map(project => {
    if (project.id === 1) return { ...project, imageUrl: fintechImage };
    if (project.id === 2) return { ...project, imageUrl: ecommerceImage };
    return project;
  });

  const projectTypes = ProjectModel.getProjectTypes();
  
  const filteredProjects = typeFilter === 'all' 
    ? allProjects 
    : allProjects.filter(project => project.type === typeFilter);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15
      } 
    }
  };

  const getTypeIcon = (type) => {
    switch(type) {
      case 'brand-design': return <FiLayers className="mr-2" />;
      case 'web': return <FiCode className="mr-2" />;
      case 'mobile': return <FiSmartphone className="mr-2" />;
      case 'problem-solving': return <FiPieChart className="mr-2" />;
      default: return null;
    }
  };

  return (
    <section id="projects" className={`py-20 ${darkMode ? 'bg-[#0a0a0f]' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Projets Exceptionnels
          </h2>
          <div className={`w-24 h-1 mx-auto mb-6 ${darkMode ? 'bg-gradient-to-r from-blue-400 to-blue-600' : 'bg-gradient-to-r from-indigo-500 to-purple-600'}`}></div>
          <p className={`text-xl max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Découvrez nos réalisations les plus remarquables.
          </p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {projectTypes.map(type => (
            <motion.button
              key={type.id}
              onClick={() => setTypeFilter(type.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all flex items-center ${
                typeFilter === type.id 
                  ? darkMode 
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/20' 
                    : 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/20'
                  : darkMode 
                    ? 'bg-[#1a1a24] text-gray-300 hover:bg-[#252535]' 
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              {getTypeIcon(type.id)}
              {type.name}
            </motion.button>
          ))}
        </motion.div>

        {filteredProjects.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`text-center py-16 rounded-xl ${darkMode ? 'bg-[#1a1a24] text-gray-300' : 'bg-white text-gray-600 shadow-lg'}`}
          >
            <p className="text-lg mb-4">Aucun projet trouvé avec ces filtres.</p>
            <motion.button 
              onClick={() => setTypeFilter('all')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-medium ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-indigo-600 hover:bg-indigo-700 text-white'}`}
            >
              Réinitialiser les filtres
            </motion.button>
          </motion.div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {filteredProjects.map((project) => (
              <motion.div 
                key={project.id} 
                variants={item}
                whileHover={{ y: -8 }}
                className={`rounded-2xl overflow-hidden shadow-xl transition-all duration-300 ${darkMode ? 'bg-[#1a1a24] border border-[#252535]' : 'bg-white border border-gray-100'}`}
              >
                {/* Project Image with blue accent */}
                <div className="h-56 w-full relative overflow-hidden">
                  <motion.img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold flex items-center ${
                    darkMode ? 'bg-blue-500/90 text-white' : 'bg-white/90 text-gray-800'
                  }`}>
                    {getTypeIcon(project.type)}
                    {projectTypes.find(t => t.id === project.type)?.name}
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    {project.title}
                  </h3>
                  <p className={`mb-4 line-clamp-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {project.description}
                  </p>
                  
                  <motion.button 
                    whileHover={{ 
                      scale: 1.03,
                      backgroundColor: darkMode ? '#3b82f6' : '#6366f1'
                    }}
                    whileTap={{ scale: 0.97 }}
                    className={`w-full mt-4 py-3 px-4 rounded-lg flex items-center justify-center gap-2 font-medium transition-colors ${
                      darkMode 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-indigo-600 text-white'
                    }`}
                  >
                    Découvrir le projet
                    <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;