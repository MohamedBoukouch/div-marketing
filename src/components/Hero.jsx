import { useContext, useEffect, useState, useRef } from 'react';
import { DarkModeContext } from '../App';
import { FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

// Importez vos images pour les slides
import slide1 from '../assets/sliders/slide1.jpeg';
import slide2 from '../assets/sliders/slide2.png';
import slide3 from '../assets/sliders/slide3.jpg';

const Hero = () => {
  const { darkMode } = useContext(DarkModeContext);
  const [currentSlide, setCurrentSlide] = useState(0);
  const solutionsRef = useRef(null);

  const services = [
    { title: 'Mobile Premium', desc: 'Apps natives iOS/Android avec IA intégrée' },
    { title: 'Web Avancé', desc: 'Applications web haute performance' },
    { title: 'Design Innovation', desc: 'Identités visuelles révolutionnaires' },
    { title: 'Social Media Pro', desc: 'Stratégies social media qui convertissent' }
  ];

  const slides = [
    { 
      title: 'Création de Site Web', 
      desc: 'Sites performants et optimisés SEO',
      image: slide1
    },
    { 
      title: 'Applications Mobile', 
      desc: 'Applications cross-platform natives',
      image: slide2
    },
    { 
      title: 'Stratégie Digitale', 
      desc: 'Plans marketing sur-mesure',
      image: slide3
    }
  ];

  const scrollToSolutions = () => {
    solutionsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className={`min-h-screen flex items-center ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Services */}
        <div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
              Div-Marketing
            </span> {' '}
            <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
              Revolutionne Votre Digital
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`text-lg md:text-xl mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
          >
            Agence marketing digital premium spécialisée dans la création d'expériences digitales exceptionnelles.
          </motion.p>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} shadow-md transition-all border-l-4 ${index % 2 === 0 ? 'border-indigo-500' : 'border-purple-500'}`}
              >
                <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{service.title}</h3>
                <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>{service.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex gap-4"
          >
            <button 
              onClick={scrollToSolutions}
              className={`px-6 py-3 rounded-md font-bold transition-all flex items-center ${
                darkMode 
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white' 
                  : 'bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white'
              } shadow-lg hover:shadow-xl`}
            >
              Démarrer Maintenant <FiArrowRight className="inline ml-2" />
            </button>
          </motion.div>
        </div>

        {/* Right Column - Image Carousel */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative h-full min-h-[400px] rounded-xl overflow-hidden shadow-xl"
        >
          {slides.map((slide, index) => (
            <div 
              key={index}
              className={`absolute inset-0 flex flex-col justify-center items-center p-8 text-white transition-opacity duration-1000 ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
              style={{ 
                backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.2)), url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="max-w-md text-center">
                <h2 className="text-3xl font-bold mb-4">{slide.title}</h2>
                <p className="text-xl opacity-90">{slide.desc}</p>
              </div>
              <div className="absolute bottom-4 flex space-x-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`w-3 h-3 rounded-full ${currentSlide === i ? 'bg-white' : 'bg-white/50'}`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      <div ref={solutionsRef} />
    </section>
  );
};

export default Hero;