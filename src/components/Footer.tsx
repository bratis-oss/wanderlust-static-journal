
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <h2 className="text-2xl font-serif font-bold mb-4">Wanderlust</h2>
            <p className="text-gray-400 mb-6">
              Exploring the world's beauty one destination at a time. Join us on our journey of discovery and adventure.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Destinations</h3>
            <ul className="space-y-2">
              <li><Link to="/destinations?country=Bali" className="text-gray-400 hover:text-white transition-colors">Bali</Link></li>
              <li><Link to="/destinations?country=Japan" className="text-gray-400 hover:text-white transition-colors">Japan</Link></li>
              <li><Link to="/destinations?country=Morocco" className="text-gray-400 hover:text-white transition-colors">Morocco</Link></li>
              <li><Link to="/destinations?country=Peru" className="text-gray-400 hover:text-white transition-colors">Peru</Link></li>
              <li><Link to="/destinations?country=Greece" className="text-gray-400 hover:text-white transition-colors">Greece</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/destinations" className="text-gray-400 hover:text-white transition-colors">All Destinations</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to receive travel tips and exclusive content.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 rounded-l-lg text-gray-900 focus:outline-none w-full"
              />
              <button 
                type="submit" 
                className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-r-lg flex items-center justify-center"
              >
                <Mail size={18} />
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Wanderlust. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
