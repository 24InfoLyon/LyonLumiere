import React, { createContext, useContext, useState, useEffect } from 'react';

type ThemeContextType = {
  currentSection: string;
  setCurrentSection: (section: string) => void;
  isNightMode: boolean;
  toggleNightMode: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  currentSection: 'hero',
  setCurrentSection: () => {},
  isNightMode: true,
  toggleNightMode: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentSection, setCurrentSection] = useState('hero');
  const [isNightMode, setIsNightMode] = useState(true);

  const toggleNightMode = () => {
    setIsNightMode((prev) => !prev);
  };

  // Set up intersection observer to detect which section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setCurrentSection(id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        currentSection,
        setCurrentSection,
        isNightMode,
        toggleNightMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};