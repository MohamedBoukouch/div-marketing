import { useContext } from 'react';
import { DarkModeContext } from '../App';
import { motion } from 'framer-motion';
import { 
  FiSmartphone, 
  FiGlobe, 
  FiLayout,
  FiShare2,
  FiCode,
  FiBarChart2,
  FiPenTool,
  FiTrendingUp,
  FiCpu,
  FiZap,
  FiSearch,
  FiDatabase,
  FiUsers,
  FiAward,
  FiPieChart
} from 'react-icons/fi';

// Replace FiRocket with available icon (using FiTrendingUp as alternative)
const services = [
  {
    title: "Mobile Premium",
    description: "Apps natives iOS/Android avec IA intégrée",
    features: [
      { text: "React Native Expert", icon: <FiCode className="mr-2" /> },
      { text: "Future Advanced", icon: <FiZap className="mr-2" /> },
      { text: "AI integration", icon: <FiCpu className="mr-2" /> },
      { text: "App Store Optimization", icon: <FiAward className="mr-2" /> }
    ],
    icon: <FiSmartphone size={32} />
  },
  {
    title: "Web Avancé",
    description: "Applications web haute performance",
    features: [
      { text: "Next.js 14", icon: <FiGlobe className="mr-2" /> },
      { text: "Performance 100/100", icon: <FiBarChart2 className="mr-2" /> },
      { text: "SEO Advanced", icon: <FiSearch className="mr-2" /> },
      { text: "PWA Ready", icon: <FiDatabase className="mr-2" /> }
    ],
    icon: <FiGlobe size={32} />
  },
  {
    title: "Design Innovation",
    description: "Identités visuelles révolutionnaires",
    features: [
      { text: "Smart Strategy", icon: <FiLayout className="mr-2" /> },
      { text: "UX/UI Premium", icon: <FiPenTool className="mr-2" /> },
      { text: "Motion Design", icon: <FiShare2 className="mr-2" /> },
      { text: "3D Graphics", icon: <FiLayout className="mr-2" /> }
    ],
    icon: <FiPenTool size={32} />
  },
  {
    title: "Social Media Pro",
    description: "Stratégies social media qui convertissent",
    features: [
      { text: "Content Strategy", icon: <FiShare2 className="mr-2" /> },
      { text: "Influencer Network", icon: <FiUsers className="mr-2" /> },
      { text: "Analytics AI", icon: <FiPieChart className="mr-2" /> },
      { text: "Growth Hacking", icon: <FiTrendingUp className="mr-2" /> }
    ],
    icon: <FiTrendingUp size={32} />  // Replaced FiRocket with FiTrendingUp
  }
];


const Services = () => {
  const { darkMode } = useContext(DarkModeContext);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="services" className={`py-20 ${darkMode ? 'bg-[#1E1E2D]' : 'bg-white'}`}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className={`text-3xl font-bold text-center mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            Solutions Exceptionnelles
          </h2>
          <p className={`text-xl text-center max-w-3xl mx-auto mb-16 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Nous créons des expériences digitales qui marquent les esprits.
          </p>
        </motion.div>
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={item}
              whileHover={{ y: -5 }}
              className={`p-6 rounded-xl transition-all duration-300 ${darkMode ? 'bg-[#2D2D3A] hover:bg-[#3D3D4A]' : 'bg-gray-50 hover:bg-white'} shadow-md hover:shadow-xl`}
            >
              <div className={`flex items-center justify-center w-16 h-16 rounded-full mb-4 ${darkMode ? 'bg-indigo-900/30 text-indigo-400' : 'bg-indigo-100 text-indigo-600'}`}>
                {service.icon}
              </div>
              <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>
                {service.title}
              </h3>
              <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, i) => (
                  <li key={i} className={`flex items-start ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <span className={`mt-1 mr-2 ${darkMode ? 'text-indigo-400' : 'text-indigo-500'}`}>
                      {feature.icon}
                    </span>
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;