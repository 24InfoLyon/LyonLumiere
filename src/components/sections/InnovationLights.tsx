import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import FigureCard from '../innovation/FigureCard';
import { Lightbulb } from 'lucide-react';

const innovators = [
  {
    id: 1,
    name: "Les Frères Lumière",
    title: "Inventeurs du Cinématographe",
    description: "Auguste et Louis Lumière n'ont pas seulement inventé le cinéma, mais ont également contribué à la photographie couleur avec l'Autochrome Lumière.",
    image: "https://images.pexels.com/photos/6635323/pexels-photo-6635323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    achievement: "Premier appareil permettant d'enregistrer et de projeter des images en mouvement (1895)"
  },
  {
    id: 2,
    name: "Joseph-Marie Jacquard",
    title: "Inventeur du Métier à Tisser Programmable",
    description: "Né à Lyon, Jacquard a révolutionné l'industrie textile avec son métier à tisser utilisant des cartes perforées, précurseur de l'informatique moderne.",
    image: "https://images.pexels.com/photos/6407543/pexels-photo-6407543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    achievement: "Métier Jacquard utilisant des cartes perforées (1801)"
  },
  {
    id: 3,
    name: "Claude Bourgelat",
    title: "Fondateur de la Première École Vétérinaire",
    description: "Pionnier de la médecine vétérinaire moderne, il a fondé à Lyon la première école vétérinaire au monde, établissant cette discipline comme science.",
    image: "https://images.pexels.com/photos/2067062/pexels-photo-2067062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    achievement: "Fondation de l'École Nationale Vétérinaire de Lyon (1762)"
  }
];

const InnovationLights: React.FC = () => {
  const { isNightMode } = useTheme();

  return (
    <section 
      id="innovation"
      className={`min-h-screen py-24 transition-colors duration-500 ${
        isNightMode ? 'bg-sky-950' : 'bg-sky-100 text-sky-900'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-serif font-bold mb-6 ${
            isNightMode ? 'text-white' : 'text-sky-900'
          }`}>
            Lumières de l'Innovation
          </h2>
          <p className={`text-xl ${isNightMode ? 'text-sky-200' : 'text-sky-700'}`}>
            Lyon, foyer de créativité et d'innovation, a vu naître des inventions et 
            des pensées avant-gardistes qui ont illuminé le monde.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16">
          <div>
            <h3 className={`text-2xl font-serif font-bold mb-4 ${
              isNightMode ? 'text-yellow-400' : 'text-sky-800'
            }`}>
              Carrefour d'Idées et d'Innovations
            </h3>
            <p className={`mb-6 ${isNightMode ? 'text-sky-200' : 'text-sky-700'}`}>
              Lyon, par sa position géographique stratégique et son histoire riche, 
              a toujours été un carrefour d'échanges et d'influences diverses, favorisant 
              l'émergence d'idées novatrices.
            </p>
            <p className={`mb-6 ${isNightMode ? 'text-sky-200' : 'text-sky-700'}`}>
              De la soierie au cinéma, de la médecine à la gastronomie, les Lyonnais 
              ont fait preuve d'un génie créatif qui continue d'inspirer le monde entier, 
              faisant de la ville un phare intellectuel qui brille à travers les siècles.
            </p>
            <div className={`flex items-center p-4 rounded-lg ${
              isNightMode ? 'bg-sky-900/50' : 'bg-white'
            }`}>
              <div className={`mr-4 p-3 rounded-full ${
                isNightMode ? 'bg-yellow-400 text-sky-900' : 'bg-sky-100 text-sky-600'
              }`}>
                <Lightbulb size={24} />
              </div>
              <p className={`italic text-sm ${
                isNightMode ? 'text-sky-200' : 'text-sky-700'
              }`}>
                "Lyon n'est pas seulement une ville de lumières visuelles, 
                mais aussi un foyer de lumières intellectuelles qui ont éclairé 
                le chemin du progrès humain."
              </p>
            </div>
          </div>
          
          <div className={`rounded-xl overflow-hidden shadow-lg ${
            isNightMode ? 'shadow-sky-500/20' : 'shadow-sky-200'
          }`}>
            <img 
              src="https://images.pexels.com/photos/3825573/pexels-photo-3825573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Innovation à Lyon" 
              className="w-full h-80 object-cover"
            />
          </div>
        </div>

        <div className="mb-16">
          <h3 className={`text-2xl font-serif font-bold mb-8 text-center ${
            isNightMode ? 'text-yellow-400' : 'text-sky-800'
          }`}>
            Figures Emblématiques
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {innovators.map(innovator => (
              <FigureCard 
                key={innovator.id}
                innovator={innovator}
                isNightMode={isNightMode}
              />
            ))}
          </div>
        </div>
        
        <div className="text-center">
          <a 
            href="#hero" 
            className={`inline-flex items-center px-6 py-3 rounded-full transition-colors ${
              isNightMode 
                ? 'bg-yellow-500 text-sky-900 hover:bg-yellow-400' 
                : 'bg-sky-600 text-white hover:bg-sky-700'
            }`}
          >
            Retour au début du voyage
            <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" transform="rotate(-90 10 10)"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default InnovationLights;