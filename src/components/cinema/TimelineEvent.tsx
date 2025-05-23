import React from 'react';

interface Event {
  id: number;
  year: number;
  title: string;
  description: string;
  image: string;
  videoUrl: string;
}

interface TimelineEventProps {
  event: Event;
  isSelected: boolean;
  onClick: () => void;
  isNightMode: boolean;
}

const TimelineEvent: React.FC<TimelineEventProps> = ({ event, isSelected, onClick, isNightMode }) => {
  return (
    <div 
      className={`relative pl-8 cursor-pointer transition-all duration-300 ${
        isSelected ? 'scale-105' : 'hover:scale-102'
      }`}
      onClick={onClick}
    >
      {/* Timeline dot */}
      <div 
        className={`absolute left-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
          isSelected 
            ? isNightMode ? 'bg-yellow-400 text-amber-900' : 'bg-amber-600 text-white'
            : isNightMode ? 'bg-amber-800 text-amber-200' : 'bg-amber-200 text-amber-800'
        }`}
        style={{ left: '-16px', top: '0' }}
      >
        <span className="text-xs font-bold">{event.year}</span>
      </div>
      
      <div className="flex items-start">
        <div className="flex-grow">
          <h4 className={`text-lg font-medium mb-2 transition-colors ${
            isSelected
              ? isNightMode ? 'text-yellow-400' : 'text-amber-700'
              : isNightMode ? 'text-amber-200' : 'text-amber-800'
          }`}>
            {event.title}
          </h4>
          <p className={`text-sm transition-colors ${
            isNightMode ? 'text-amber-300/80' : 'text-amber-700/80'
          }`}>
            {event.description}
          </p>
        </div>
        
        <div className="flex-shrink-0 ml-4 w-16 h-16 rounded overflow-hidden">
          <img 
            src={event.image} 
            alt={event.title} 
            className={`w-full h-full object-cover transition-all ${
              isSelected ? 'scale-110' : ''
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default TimelineEvent;