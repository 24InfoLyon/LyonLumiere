import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import TimelineEvent from '../cinema/TimelineEvent';
import VideoPlayer from '../cinema/VideoPlayer';

const timelineEvents = [
  {
    id: 1,
    year: 1895,
    title: "Le Cinématographe",
    description: "Auguste et Louis Lumière inventent le Cinématographe, un appareil révolutionnaire permettant de filmer et de projeter des images en mouvement.",
    image: "src/image/premieraparail.jpg",
    videoUrl: "src/image/L'Invention du cinématographe.mp4"
  },
  {
    id: 2,
    year: 1895,
    title: "La Sortie de l'Usine Lumière à Lyon",
    description: "Premier film projeté publiquement par les frères Lumière, montrant les ouvriers quittant leur usine de Lyon.",
    image: "src/image/premierfilm.jpg",
    videoUrl: "src/image/The first film ever made by les frères Lumière - Sortie des Usines Lumière à Lyon-18 (1985).mp4"
  },
  {
    id: 3,
    year: 1896,
    title: "L'Arrivée d'un train en gare de La Ciotat",
    description: "Ce film célèbre aurait provoqué la panique lors de sa projection, les spectateurs croyant que le train allait sortir de l'écran.",
    image: "src/image/arrivee-d-un-train-en-gare.jpg",
    videoUrl: "src/image/videoplayback.mp4"
  },
  {
    id: 4,
    year: 1902,
    title: "Le Voyage dans la Lune",
    description: "Réalisé par Georges Méliès, ce film pionnier du cinéma fantastique a été inspiré par les avancées techniques des frères Lumière.",
    image: "src/image/georges-melies-cineaste-voyage-lune-histoire-magie-films-paris-zigzag-romane-fraysse-6.webp",
    videoUrl: "src/image/_Le Voyage dans la lune_ (1902) en couleur.mp4"
  }
];

const CinemaLights: React.FC = () => {
  const { isNightMode } = useTheme();
  const [selectedEvent, setSelectedEvent] = useState(timelineEvents[0]);

  return (
    <section 
      id="cinema"
      className={`min-h-screen py-24 transition-colors duration-500 ${
        isNightMode ? 'bg-amber-950' : 'bg-amber-100 text-amber-900'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-serif font-bold mb-6 ${
            isNightMode ? 'text-white' : 'text-amber-900'
          }`}>
            Lumières du Cinéma
          </h2>
          <p className={`text-xl ${isNightMode ? 'text-amber-200' : 'text-amber-700'}`}>
            Lyon, berceau du cinéma mondial grâce aux frères Lumière, a révolutionné 
            l'art de capturer et projeter la lumière en mouvement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16">
          <div className={`order-2 lg:order-1 rounded-xl overflow-hidden shadow-lg ${
            isNightMode ? 'shadow-amber-500/20' : 'shadow-amber-200'
          }`}>
            <img 
              src="src/image/projLumiere.jpg"
              alt="Les frères Lumière" 
              className="w-full h-80 object-cover"
            />
          </div>
          
          <div className="order-1 lg:order-2">
            <h3 className={`text-2xl font-serif font-bold mb-4 ${
              isNightMode ? 'text-yellow-400' : 'text-amber-800'
            }`}>
              Les Frères Lumière
            </h3>
            <p className={`mb-6 ${isNightMode ? 'text-amber-200' : 'text-amber-700'}`}>
              Auguste et Louis Lumière ont marqué l'histoire en inventant le Cinématographe en 1895, 
              premier appareil capable de filmer et de projeter des images animées.
            </p>
            <p className={`mb-6 ${isNightMode ? 'text-amber-200' : 'text-amber-700'}`}>
              Ces deux industriels lyonnais, fils d'Antoine Lumière, ont organisé à Paris 
              la première projection publique payante de l'histoire du cinéma, 
              le 28 décembre 1895 au Grand Café, boulevard des Capucines.
            </p>
            <a 
              href="#"
              className={`inline-flex items-center font-medium transition-colors ${
                isNightMode 
                  ? 'text-yellow-400 hover:text-yellow-300' 
                  : 'text-amber-600 hover:text-amber-800'
              }`}
            >
              Visiter l'Institut Lumière
              <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </a>
          </div>
        </div>

        <div className="mb-16">
          <h3 className={`text-2xl font-serif font-bold mb-6 text-center ${
            isNightMode ? 'text-yellow-400' : 'text-amber-800'
          }`}>
            Les Débuts du Cinéma
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
              <div className={`p-6 rounded-xl ${
                isNightMode ? 'bg-amber-900/50' : 'bg-white'
              }`}>
                <div className="mb-8">
                  <h4 className={`text-xl font-bold mb-3 ${
                    isNightMode ? 'text-yellow-400' : 'text-amber-800'
                  }`}>
                    {selectedEvent.title} ({selectedEvent.year})
                  </h4>
                  <p className={isNightMode ? 'text-amber-200' : 'text-amber-700'}>
                    {selectedEvent.description}
                  </p>
                </div>
                
                <VideoPlayer 
                  videoUrl={selectedEvent.videoUrl}
                  posterImage={selectedEvent.image}
                  isNightMode={isNightMode}
                />
              </div>
            </div>
            
            <div className="lg:col-span-3">
              <div className={`relative py-8 px-4 rounded-xl ${
                isNightMode ? 'bg-amber-900/30' : 'bg-white/80'
              }`}>
                {/* Timeline line */}
                <div className={`absolute left-4 top-0 bottom-0 w-0.5 ${
                  isNightMode ? 'bg-amber-700' : 'bg-amber-300'
                }`}></div>
                
                <div className="space-y-12">
                  {timelineEvents.map((event) => (
                    <TimelineEvent 
                      key={event.id}
                      event={event}
                      isSelected={selectedEvent.id === event.id}
                      onClick={() => setSelectedEvent(event)}
                      isNightMode={isNightMode}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <a 
            href="#innovation" 
            className={`inline-flex items-center px-6 py-3 rounded-full transition-colors ${
              isNightMode 
                ? 'bg-yellow-500 text-amber-900 hover:bg-yellow-400' 
                : 'bg-amber-600 text-white hover:bg-amber-700'
            }`}
          >
            Découvrir les Lumières de l'Innovation
            <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" transform="rotate(90 10 10)"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CinemaLights;