const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">DIV-Marketing</h3>
              <p className="text-gray-400">
                Agence Marketing Digital Premium.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Mobile</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Web</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Design</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Social Media</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Contact</h4>
              <address className="not-italic text-gray-400 space-y-2">
                <p>123 Rue Digital, Paris</p>
                <p>contact@div-marketing.com</p>
                <p>+33 1 23 45 67 89</p>
              </address>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            © 2024 DIV-Marketing. Tous droits réservés.
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;