import React, {useState} from 'react';
import {useTheme} from '../../contexts/ThemeContext';
import LightMap from '../urban/LightMap';
import EventCard from '../urban/EventCard';

const events = [
  {
    id: 1,
    title: 'Place des Terreaux',
    description: 'La Place des Terreaux accueille l\'une des installations les plus emblématiques de la Fête des Lumières, avec des projections monumentales sur l\'Hôtel de Ville et le Musée des Beaux-Arts.',
    image: 'https://images.pexels.com/photos/1604144/pexels-photo-1604144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    coordinates: [45.765, 4.8650]
  },
  {
    id: 2,
    title: 'Cathédrale Saint-Jean',
    description: 'La façade de la cathédrale s\'illumine de milliers de couleurs lors d\'un spectacle son et lumière qui retrace l\'histoire de Lyon.',
    image: 'https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    coordinates: [45.77, 4.8732]
  },
  {
    id: 3,
    title: 'Parc de la Tête d\'Or',
    description: 'Le parc se transforme en un monde féérique avec des installations lumineuses interactives dispersées le long des chemins et autour du lac.',
    image: 'https://images.pexels.com/photos/943907/pexels-photo-943907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    coordinates: [45.753, 4.829]
  },
  {
    id: 4,
    title: 'Place Bellecour',
    description: 'La plus grande place piétonne d\'Europe devient une scène à ciel ouvert pour des spectacles de lumière et des installations artistiques.',
    image: 'https://images.pexels.com/photos/585758/pexels-photo-585758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    coordinates: [45.775, 4.8650]
  }
];

const UrbanLights: React.FC = () => {
  const { isNightMode } = useTheme();
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);

  return (
    <section 
      id="urban"
      className={`min-h-screen py-24 transition-colors duration-500 ${
        isNightMode ? 'bg-blue-950' : 'bg-blue-100 text-blue-900'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-serif font-bold mb-6 ${
            isNightMode ? 'text-white' : 'text-blue-900'
          }`}>
            Lumières Urbaines
          </h2>
          <p className={`text-xl ${isNightMode ? 'text-blue-200' : 'text-blue-700'}`}>
            Découvrez Lyon, ville des lumières, à travers sa célèbre Fête des Lumières 
            et ses monuments illuminés qui transforment la ville en une œuvre d'art nocturne.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16">
          <div>
            <h3 className={`text-2xl font-serif font-bold mb-4 ${
              isNightMode ? 'text-yellow-400' : 'text-blue-800'
            }`}>
              La Fête des Lumières
            </h3>
            <p className={`mb-6 ${isNightMode ? 'text-blue-200' : 'text-blue-700'}`}>
              Chaque année en décembre, Lyon s’illumine pendant quatre nuits magiques, plongeant la ville dans une
              ambiance féerique et chaleureuse.
            </p>
            <p className={`mb-6 ${isNightMode ? 'text-blue-200' : 'text-blue-700'}`}>
              Cette tradition, née en 1852 à l’occasion de l’inauguration de la statue
              de la Vierge Marie sur la colline de Fourvière, s’est transformée au fil du temps en un événement
              international incontournable.
            </p>
            <p className={`mb-6 ${isNightMode ? 'text-blue-200' : 'text-blue-700'}`}>
              Aujourd’hui, la Fête des Lumières attire plus de 2 millions de visiteurs
              venus du monde entier pour admirer la métamorphose nocturne de la ville.
            </p>
            <p className={`mb-6 ${isNightMode ? 'text-blue-200' : 'text-blue-700'}`}>
              Durant ces soirées exceptionnelles, des artistes de renommée internationale investissent les rues, les
              bâtiments historiques, les places emblématiques et les parcs de Lyon.
              Grâce à des installations lumineuses innovantes, des projections monumentales et des spectacles interactifs, ils transforment chaque recoin de
              la ville en une véritable œuvre d’art éphémère.
            </p>
            <p className={`mb-6 ${isNightMode ? 'text-blue-200' : 'text-blue-700'}`}>
              Les habitants et les visiteurs déambulent émerveillés,
              découvrant une Lyon sublimée par la lumière, où la créativité et la poésie s’invitent à chaque coin de
              rue, créant une atmosphère unique et inoubliable.
            </p>
          </div>
          
          <div className={`rounded-xl overflow-hidden shadow-lg ${isNightMode ? 'shadow-blue-500/20' : 'shadow-blue-200'}`}>
            <img 
              src="src/image/basilique.jpg"
              alt="Fête des Lumières à Lyon" 
              className="w-full h-80 object-cover"
            />
          </div>
        </div>

        <div className="mb-16">
          <h3 className={`text-2xl font-serif font-bold mb-6 text-center ${
            isNightMode ? 'text-yellow-400' : 'text-blue-800'
          }`}>
            Carte Interactive des Illuminations
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className={`rounded-xl overflow-hidden h-96 ${
                isNightMode ? 'shadow-lg shadow-blue-500/20' : 'shadow-md shadow-blue-200'
              }`}>
                <LightMap 
                  events={events} 
                  selectedEvent={selectedEvent} 
                  setSelectedEvent={setSelectedEvent}
                  isNightMode={isNightMode}
                />
              </div>
            </div>
            
            <div className="flex flex-col space-y-4">
              {events.map(event => (
                <EventCard 
                  key={event.id}
                  event={event}
                  isSelected={selectedEvent === event.id}
                  onClick={() => setSelectedEvent(event.id)}
                  isNightMode={isNightMode}
                />
              ))}
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <a 
            href="#cinema" 
            className={`inline-flex items-center px-6 py-3 rounded-full transition-colors ${
              isNightMode 
                ? 'bg-yellow-500 text-blue-900 hover:bg-yellow-400' 
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            Découvrir les Lumières du Cinéma
            <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" transform="rotate(90 10 10)"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default UrbanLights;