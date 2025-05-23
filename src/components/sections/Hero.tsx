import React, { useEffect, useRef } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const { isNightMode, toggleNightMode } = useTheme();
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  // Add animation effect on load
  useEffect(() => {
    const title = titleRef.current;
    if (title) {
      title.classList.add('animate-fade-in');
    }
  }, []);

  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Background */}
      <div 
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
          isNightMode ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ 
          backgroundImage: 'url(src/image/LyonJour.webp)'
        }}
      ></div>
      
      <div 
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
          isNightMode ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ 
          backgroundImage: 'url(src/image/LyonNuit.png)'
        }}
      ></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/30 via-neutral-900/50 to-neutral-900"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 
          ref={titleRef}
          className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-6 opacity-0 transition-opacity duration-1000"
          style={{ animationDelay: '300ms' }}
        >
          Lyon, Ville de <span className="text-yellow-400">Lumière</span><span className="text-yellow-400 animate-pulse">s</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '600ms' }}>
          Une exploration immersive des trois dimensions lumineuses qui définissent l'identité lyonnaise
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: '900ms' }}>
          <a 
            href="#urban" 
            className="px-8 py-3 bg-yellow-500 text-neutral-900 font-medium rounded-full hover:bg-yellow-400 transition-colors"
          >
            Commencer le voyage
          </a>
          <a
            onClick={toggleNightMode}
            href="#about" 
            className="px-8 py-3 bg-transparent border border-white/30 rounded-full hover:bg-white/10 transition-colors"
          >
            {isNightMode ? "Eteindre" : "Allumer"} les lumières
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <a href="#urban" className="p-2 rounded-full">
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;