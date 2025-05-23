import React from 'react';

interface Event {
  id: number;
  title: string;
  description: string;
  image: string;
  coordinates: [number, number];
}

interface EventCardProps {
  event: Event;
  isSelected: boolean;
  onClick: () => void;
  isNightMode: boolean;
}

const EventCard: React.FC<EventCardProps> = ({ event, isSelected, onClick, isNightMode }) => {
  return (
    <div 
      className={`relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300 ${
        isSelected 
          ? isNightMode ? 'ring-2 ring-yellow-400 bg-blue-900' : 'ring-2 ring-blue-600 bg-white' 
          : isNightMode ? 'bg-blue-900/50 hover:bg-blue-900/80' : 'bg-white/80 hover:bg-white'
      }`}
      onClick={onClick}
    >
      <div className="flex items-center p-3">
        <div className="flex-shrink-0 w-16 h-16 rounded overflow-hidden mr-4">
          <img 
            src={event.image} 
            alt={event.title} 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className={`font-medium ${
            isNightMode ? 'text-yellow-400' : 'text-blue-800'
          }`}>
            {event.title}
          </h4>
          <p className={`text-sm ${
            isNightMode ? 'text-blue-200' : 'text-blue-600'
          }`}>
            {event.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;