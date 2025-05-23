import React, { useEffect, useRef } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { Volume2, VolumeX } from 'lucide-react';

const AudioController: React.FC = () => {
  const { currentSection, isNightMode } = useTheme();
  const [isMuted, setIsMuted] = React.useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  // Note: In a real implementation, you would have actual audio files for each section
  // For this prototype, we're using placeholder URLs
  const audioTracks = {
    hero: 'https://example.com/hero-ambience.mp3',
    urban: 'https://example.com/urban-lights.mp3',
    cinema: 'https://example.com/vintage-cinema.mp3',
    innovation: 'https://example.com/innovation-ambient.mp3'
  };

  // Update audio source when section changes
  useEffect(() => {
    if (audioRef.current && !isMuted) {
      // In a real implementation, you would set the actual audio source here
      // audioRef.current.src = audioTracks[currentSection as keyof typeof audioTracks];
      // audioRef.current.play();
      
      console.log(`Playing audio for section: ${currentSection}`);
    }
  }, [currentSection, isMuted]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    
    if (audioRef.current) {
      if (isMuted) {
        // audioRef.current.src = audioTracks[currentSection as keyof typeof audioTracks];
        // audioRef.current.play();
        console.log(`Audio enabled for section: ${currentSection}`);
      } else {
        // audioRef.current.pause();
        console.log('Audio disabled');
      }
    }
  };

  return (
    <>
      <audio ref={audioRef} loop />
      
      <button
        onClick={toggleMute}
        className={`fixed bottom-6 right-6 z-40 p-3 rounded-full transition-all ${
          isMuted 
            ? isNightMode ? 'bg-white/10 hover:bg-white/20' : 'bg-neutral-200 hover:bg-neutral-300' 
            : isNightMode ? 'bg-yellow-400 text-neutral-900' : 'bg-blue-600 text-white'
        }`}
        aria-label={isMuted ? "Activer le son" : "Désactiver le son"}
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>
    </>
  );
};

export default AudioController;