import { useContext } from 'react';
import { DarkModeContext } from '../App';

const Hero = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <section className={`py-20 text-white ${darkMode ? 'bg-gradient-to-r from-indigo-600 to-purple-700' : 'bg-gradient-to-r from-indigo-500 to-purple-600'}`}>
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Div-Marketing Revolutionne Votre Digital</h1>
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
          Agence marketing digital premium spécialisée dans la création d'expériences digitales exceptionnelles.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {[
            { title: 'Livraison Express', desc: 'Projets livrés rapidement' },
            { title: 'ROI Garanti', desc: 'Résultats mesurables' },
            { title: 'Award Winner', desc: 'Agence primée 2024' },
            { title: 'Support 24/7', desc: 'Assistance premium' }
          ].map((item, index) => (
            <div key={index} className={`p-6 rounded-lg backdrop-blur-sm ${darkMode ? 'bg-white/20 hover:bg-white/30' : 'bg-white/10 hover:bg-white/20'} transition-all`}>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white px-8 py-3 rounded-md font-bold hover:bg-gray-100 transition-colors">
            <span className={darkMode ? 'text-indigo-700' : 'text-indigo-600'}>Démarrer Maintenant →</span>
          </button>
          <button className="border-2 border-white px-8 py-3 rounded-md font-bold hover:bg-white transition-colors">
            <span className={darkMode ? 'hover:text-indigo-700' : 'hover:text-indigo-600'}>Voir Portfolio</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;