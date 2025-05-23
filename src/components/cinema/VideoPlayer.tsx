import React, { useState } from 'react';
import { Play, Pause } from 'lucide-react';

interface VideoPlayerProps {
  videoUrl: string;
  posterImage: string;
  isNightMode: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl, posterImage, isNightMode }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    const video = document.getElementById('cinema-video') as HTMLVideoElement;
    
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  // Apply film grain effect
  const filmGrainStyle = {
    position: 'absolute' as const,
    inset: 0,
    opacity: isNightMode ? 0.12 : 0.08,
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
    pointerEvents: 'none' as const,
  };

  return (
    <div className="relative rounded-lg overflow-hidden group">
      {/* Video element */}
      <video 
        id="cinema-video"
        className={`w-full rounded-lg ${isNightMode ? 'sepia-[0.3] contrast-125' : 'sepia-[0.1]'}`}
        poster={posterImage}
        src={videoUrl}
        onEnded={() => setIsPlaying(false)}
      ></video>
      
      {/* Film grain overlay */}
      <div style={filmGrainStyle}></div>
      
      {/* Play/pause button */}
      <button 
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
          w-16 h-16 rounded-full flex items-center justify-center transition-all 
          ${isPlaying 
            ? 'opacity-0 scale-90 group-hover:opacity-100' 
            : 'opacity-100 scale-100'
          } ${isNightMode 
            ? 'bg-yellow-400 text-amber-900' 
            : 'bg-amber-600 text-white'
          }`}
        onClick={togglePlayPause}
        aria-label={isPlaying ? "Pause video" : "Play video"}
      >
        {isPlaying ? <Pause size={24} /> : <Play size={24} />}
      </button>
      
      {/* Vintage film frame */}
      <div className={`absolute inset-0 pointer-events-none border-8 rounded ${
        isNightMode ? 'border-amber-900/50' : 'border-amber-700/20'
      }`}></div>
      
      {/* Film perforations */}
      <div className="absolute top-0 bottom-0 left-1 flex flex-col justify-between py-2 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div 
            key={`left-${i}`}
            className={`w-1.5 h-2.5 rounded-sm ${isNightMode ? 'bg-amber-900/70' : 'bg-amber-800/30'}`}
          ></div>
        ))}
      </div>
      <div className="absolute top-0 bottom-0 right-1 flex flex-col justify-between py-2 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div 
            key={`right-${i}`}
            className={`w-1.5 h-2.5 rounded-sm ${isNightMode ? 'bg-amber-900/70' : 'bg-amber-800/30'}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default VideoPlayer;