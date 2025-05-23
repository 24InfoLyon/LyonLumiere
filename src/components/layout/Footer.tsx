import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { Github, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const { currentSection } = useTheme();
  
  const getBgColor = () => {
    switch (currentSection) {
      case 'urban':
        return 'bg-blue-950';
      case 'cinema':
        return 'bg-amber-950';
      case 'innovation':
        return 'bg-sky-950';
      default:
        return 'bg-neutral-950';
    }
  };

  return (
    <footer className={`${getBgColor()} transition-colors duration-500 py-12`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif mb-4">Lyon<span className="text-yellow-400">•</span>Lumière</h3>
            <p className="text-gray-400 mb-4">
              Une expérience immersive à travers les lumières de Lyon : 
              urbaines, cinématographiques et innovantes.
            </p>
            <div className="flex space-x-4">
              <a href="https://x.com/villedelyon" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://www.instagram.com/villedelyon/?hl=fr" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://github.com/24InfoLyon/LyonLumiere" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Liens rapides</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#urban" className="hover:text-yellow-400 transition-colors">Lumières Urbaines</a>
              </li>
              <li>
                <a href="#cinema" className="hover:text-yellow-400 transition-colors">Cinéma</a>
              </li>
              <li>
                <a href="#innovation" className="hover:text-yellow-400 transition-colors">Innovations</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">À propos</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">Office du Tourisme</a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">Fête des Lumières</a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">Institut Lumière</a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-gray-500 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Lyon•Lumière. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;