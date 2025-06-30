import { useContext } from 'react';
import { DarkModeContext } from '../App';

const services = [
  {
    title: "Mobile Premium",
    description: "Apps natives iOS/Android avec IA intégrée",
    features: ["React Native Expert", "Future Advanced", "AI integration", "App Store Optimization"]
  },
  {
    title: "Web Avancé",
    description: "Applications web haute performance",
    features: ["Next.js 14", "Performance 100/100", "SEO Advanced", "PWA Ready"]
  },
  {
    title: "Design Innovation",
    description: "Identités visuelles révolutionnaires",
    features: ["Smart Strategy", "UX/UI Premium", "Motion Design", "3D Graphics"]
  },
  {
    title: "Social Media Pro",
    description: "Stratégies social media qui convertissent",
    features: ["Content Strategy", "Influencer Network", "Analytics AI", "Growth Hacking"]
  }
];

const Services = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <section id="services" className={`py-20 ${darkMode ? 'bg-[#1E1E2D]' : 'bg-white'}`}>
      <div className="container mx-auto px-6">
        <h2 className={`text-3xl font-bold text-center mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Solutions Exceptionnelles</h2>
        <p className={`text-xl text-center max-w-3xl mx-auto mb-16 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Nous créons des expériences digitales qui marquent les esprits.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className={`p-6 rounded-xl hover:shadow-lg transition-shadow ${darkMode ? 'bg-[#2D2D3A]' : 'bg-gray-50'}`}>
              <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>{service.title}</h3>
              <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className={`flex items-start ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <span className={`mr-2 ${darkMode ? 'text-indigo-400' : 'text-indigo-500'}`}>✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;