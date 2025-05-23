import React, { useState, useEffect } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const { currentSection, isNightMode, toggleNightMode } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine background color based on section
  const getBgColor = () => {
    if (!isScrolled) return 'bg-transparent';
    
    switch (currentSection) {
      case 'urban':
        return 'bg-blue-900/90 backdrop-blur-md';
      case 'cinema':
        return 'bg-amber-900/90 backdrop-blur-md';
      case 'innovation':
        return 'bg-sky-900/90 backdrop-blur-md';
      default:
        return 'bg-neutral-900/90 backdrop-blur-md';
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${getBgColor()}`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#hero" className="text-2xl font-serif font-bold tracking-wider">
          Lyon<span className="text-yellow-400">•</span>Lumière
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#urban"
            className={`hover:text-yellow-400 transition-colors ${
              currentSection === 'urban' ? 'text-yellow-400' : ''
            }`}
          >
            Lumières Urbaines
          </a>
          <a
            href="#cinema"
            className={`hover:text-yellow-400 transition-colors ${
              currentSection === 'cinema' ? 'text-yellow-400' : ''
            }`}
          >
            Cinéma
          </a>
          <a
            href="#innovation"
            className={`hover:text-yellow-400 transition-colors ${
              currentSection === 'innovation' ? 'text-yellow-400' : ''
            }`}
          >
            Innovations
          </a>
          <button
            onClick={toggleNightMode}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label={isNightMode ? "Switch to day mode" : "Switch to night mode"}
          >
            {isNightMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute w-full bg-neutral-900/95 backdrop-blur-md transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-60 py-4' : 'max-h-0 py-0 overflow-hidden'
        }`}
      >
        <nav className="flex flex-col items-center space-y-4 px-4">
          <a
            href="#urban"
            className={`hover:text-yellow-400 transition-colors ${
              currentSection === 'urban' ? 'text-yellow-400' : ''
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Lumières Urbaines
          </a>
          <a
            href="#cinema"
            className={`hover:text-yellow-400 transition-colors ${
              currentSection === 'cinema' ? 'text-yellow-400' : ''
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Cinéma
          </a>
          <a
            href="#innovation"
            className={`hover:text-yellow-400 transition-colors ${
              currentSection === 'innovation' ? 'text-yellow-400' : ''
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Innovations
          </a>
          <div className="flex items-center justify-center w-full pt-2 border-t border-white/10">
            <button
              onClick={() => {
                toggleNightMode();
                setMobileMenuOpen(false);
              }}
              className="flex items-center space-x-2 py-2"
            >
              {isNightMode ? <Sun size={18} /> : <Moon size={18} />}
              <span>{isNightMode ? "Mode jour" : "Mode nuit"}</span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;