import { useContext } from 'react';
import { DarkModeContext } from '../App';
import { FiMail, FiPhone, FiMessageSquare, FiClock } from 'react-icons/fi';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  const { darkMode } = useContext(DarkModeContext);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
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
        damping: 15,
        duration: 0.5
      } 
    },
    hover: {
      y: -5,
      transition: { duration: 0.2 }
    }
  };

  const contactMethods = [
    {
      name: "WhatsApp",
      icon: <FaWhatsapp className="text-2xl" />,
      color: "bg-green-500",
      hoverColor: "hover:bg-green-600",
      text: "text-white",
      link: "https://wa.me/message/N4FZ3C53UGI2I1",
      description: "Message instantané"
    },
    {
      name: "Téléphone",
      icon: <FiPhone className="text-2xl" />,
      color: "bg-blue-500",
      hoverColor: "hover:bg-blue-600",
      text: "text-white",
      link: "tel:+212777189017",
      description: "Appelez-nous directement"
    },
    {
      name: "Email",
      icon: <FiMail className="text-2xl" />,
      color: "bg-indigo-500",
      hoverColor: "hover:bg-indigo-600",
      text: "text-white",
      link: "mailto:divmarketing03@gmail.com",
      description: "divmarketing03@gmail.com"
    },
    {
      name: "Instagram",
      icon: <FaInstagram className="text-2xl" />,
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
      hoverColor: "hover:from-purple-600 hover:to-pink-600",
      text: "text-white",
      link: "https://www.instagram.com/divm.arketing/",
      description: "Suivez-nous"
    }
  ];

  return (
    <section id="contact" className={`py-20 ${darkMode ? 'bg-[#0f172a]' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Contactez-Nous
          </h2>
          <div className={`w-24 h-1 mx-auto mb-6 ${darkMode ? 'bg-gradient-to-r from-blue-400 to-blue-600' : 'bg-gradient-to-r from-indigo-500 to-purple-600'}`}></div>
          <p className={`text-lg md:text-xl max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Choisissez votre méthode de contact préférée. Nous sommes disponibles pour répondre à vos questions.
          </p>
        </motion.div>

        {/* Contact Methods Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={item}
              whileHover="hover"
              className={`flex flex-col items-center p-8 rounded-2xl shadow-lg transition-all duration-300 ${method.color} ${method.hoverColor} ${method.text}`}
            >
              <div className="mb-4 p-4 bg-white/20 rounded-full">
                {method.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{method.name}</h3>
              <p className="text-sm opacity-90 text-center">{method.description}</p>
              <motion.div
                className="mt-4 px-6 py-2 bg-white/20 rounded-full text-sm font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Cliquez ici
              </motion.div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;