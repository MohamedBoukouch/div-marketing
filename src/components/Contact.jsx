import { useState, useContext } from 'react';
import { DarkModeContext } from '../App';

const Contact = () => {
  const { darkMode } = useContext(DarkModeContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      budget: '',
      timeline: '',
      message: ''
    });
  };

  const contactMethods = [
    { 
      title: 'WhatsApp', 
      desc: 'Réponse immédiate • Disponible 24/7', 
      icon: '📱' 
    },
    { 
      title: 'Email', 
      desc: 'contact@div-marketing.com', 
      icon: '✉️' 
    },
    { 
      title: 'Appel Direct', 
      desc: '+33 1 23 45 67 89', 
      icon: '📞' 
    },
    { 
      title: 'Nos Horaires', 
      desc: 'Lun-Ven: 9h-18h • Sam: 10h-14h', 
      icon: '🕒' 
    }
  ];

  return (
    <section id="contact" className={`py-20 ${darkMode ? 'bg-[#1E1E2D]' : 'bg-white'}`}>
      <div className="container mx-auto px-6">
        <h2 className={`text-3xl font-bold text-center mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          Démarrons Votre Projet
        </h2>
        <p className={`text-xl text-center max-w-3xl mx-auto mb-16 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Prêt à transformer votre vision en réalité digitale ?
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              Parlons de Votre Projet
            </h3>
            
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-2xl mr-4">{method.icon}</span>
                  <div>
                    <h4 className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                      {method.title}
                    </h4>
                    <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                      {method.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              Formulaire de Contact
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className={`block font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className={`w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                    darkMode ? 'bg-[#2D2D3A] text-white border-gray-600' : 'bg-white text-gray-800 border-gray-300'
                  } border`}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className={`block font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className={`w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                    darkMode ? 'bg-[#2D2D3A] text-white border-gray-600' : 'bg-white text-gray-800 border-gray-300'
                  } border`}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className={`block font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className={`w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                    darkMode ? 'bg-[#2D2D3A] text-white border-gray-600' : 'bg-white text-gray-800 border-gray-300'
                  } border`}
                />
              </div>
              
              <div>
                <label htmlFor="service" className={`block font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Service souhaité *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className={`w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                    darkMode ? 'bg-[#2D2D3A] text-white border-gray-600' : 'bg-white text-gray-800 border-gray-300'
                  } border`}
                  required
                >
                  <option value="">Sélectionnez un service</option>
                  <option value="mobile">Mobile Premium</option>
                  <option value="web">Web Avancé</option>
                  <option value="design">Design Innovation</option>
                  <option value="social">Social Media Pro</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className={`block font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Décrivez votre projet *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows="4"
                  className={`w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                    darkMode ? 'bg-[#2D2D3A] text-white border-gray-600' : 'bg-white text-gray-800 border-gray-300'
                  } border`}
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md font-bold w-full transition-colors"
              >
                Envoyer le Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;