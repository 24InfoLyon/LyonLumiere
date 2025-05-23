import React, { useState } from 'react';

interface Innovator {
  id: number;
  name: string;
  title: string;
  description: string;
  image: string;
  achievement: string;
}

interface FigureCardProps {
  innovator: Innovator;
  isNightMode: boolean;
}

const FigureCard: React.FC<FigureCardProps> = ({ innovator, isNightMode }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className={`h-96 perspective-1000 cursor-pointer group ${
        isNightMode ? 'text-white' : 'text-sky-900'
      }`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`relative w-full h-full transition-transform duration-500 preserve-3d ${
        isFlipped ? 'rotate-y-180' : ''
      }`}>
        {/* Front of card */}
        <div className={`absolute w-full h-full backface-hidden rounded-xl overflow-hidden ${
          isNightMode ? 'bg-sky-900' : 'bg-white'
        }`}>
          <div className="h-1/2 overflow-hidden">
            <img 
              src={innovator.image} 
              alt={innovator.name} 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-6">
            <h4 className={`text-xl font-bold mb-1 ${
              isNightMode ? 'text-yellow-400' : 'text-sky-700'
            }`}>
              {innovator.name}
            </h4>
            <p className={`text-sm mb-4 ${
              isNightMode ? 'text-sky-300' : 'text-sky-600'
            }`}>
              {innovator.title}
            </p>
            <p className={`text-sm line-clamp-2 ${
              isNightMode ? 'text-sky-200/80' : 'text-sky-700/80'
            }`}>
              {innovator.description}
            </p>
            <div className="absolute bottom-4 right-4">
              <p className={`text-xs italic ${
                isNightMode ? 'text-sky-300' : 'text-sky-500'
              }`}>
                Cliquez pour plus
              </p>
            </div>
          </div>
        </div>
        
        {/* Back of card */}
        <div className={`absolute w-full h-full backface-hidden rounded-xl overflow-hidden rotate-y-180 ${
          isNightMode ? 'bg-sky-900' : 'bg-white'
        }`}>
          <div className="p-6 h-full flex flex-col justify-between">
            <div>
              <h4 className={`text-xl font-bold mb-4 ${
                isNightMode ? 'text-yellow-400' : 'text-sky-700'
              }`}>
                {innovator.name}
              </h4>
              <p className={`mb-4 ${
                isNightMode ? 'text-sky-200' : 'text-sky-700'
              }`}>
                {innovator.description}
              </p>
            </div>
            
            <div>
              <h5 className={`text-sm font-medium mb-2 ${
                isNightMode ? 'text-sky-300' : 'text-sky-600'
              }`}>
                Réalisation majeure
              </h5>
              <p className={`text-sm ${
                isNightMode ? 'text-sky-200/80' : 'text-sky-700/80'
              }`}>
                {innovator.achievement}
              </p>
              <div className="absolute bottom-4 right-4">
                <p className={`text-xs italic ${
                  isNightMode ? 'text-sky-300' : 'text-sky-500'
                }`}>
                  Cliquez pour revenir
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FigureCard;