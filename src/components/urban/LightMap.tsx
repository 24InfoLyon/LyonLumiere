import React from 'react';

interface Event {
  id: number;
  title: string;
  coordinates: [number, number];
  description: string;
  image: string;
}

interface LightMapProps {
  events: Event[];
  selectedEvent: number | null;
  setSelectedEvent: (id: number | null) => void;
  isNightMode: boolean;
}

// This is a simplified map representation. In a real implementation, you would integrate with Mapbox or Leaflet
const LightMap: React.FC<LightMapProps> = ({ events, selectedEvent, setSelectedEvent }) => {
  return (
    <div className="relative w-full h-full bg-cover bg-center"
      style={{ 
        backgroundImage: `url(src/image/maps.png)`,
      }}
    >
      {/* Points of interest */}
      {events.map((event) => {
        // Convert geographic coordinates to relative positions within the container
        // This is a simplified approximation - a real map would use proper projections
        const x = ((event.coordinates[1] - 4.82) / 0.06) * 100; // normalize longitude
        const y = ((45.78 - event.coordinates[0]) / 0.03) * 100; // normalize latitude
        
        return (
          <button
            key={event.id}
            className={`absolute transform -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300 ${
              selectedEvent === event.id
                ? 'w-6 h-6 bg-yellow-400 z-20'
                : 'w-4 h-4 bg-white hover:bg-yellow-300 z-10'
            }`}
            style={{ left: `${x}%`, top: `${y}%` }}
            onClick={() => setSelectedEvent(event.id)}
            aria-label={`Voir ${event.title}`}
          >
            <span className={`absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-1 rounded text-sm ${
              selectedEvent === event.id
                ? 'bg-yellow-400 text-blue-900 font-medium'
                : 'bg-white/80 text-blue-900'
            }`}>
              {event.title}
            </span>
          </button>
        );
      })}
      
      {/* Map attribution */}
      <div className="absolute bottom-2 right-2 text-xs text-white/70">
        Carte simplifiée de Lyon à des fins d'illustration
      </div>
    </div>
  );
};

export default LightMap;