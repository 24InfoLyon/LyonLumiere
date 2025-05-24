import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import UrbanLights from './components/sections/UrbanLights';
import CinemaLights from './components/sections/CinemaLights';
import InnovationLights from './components/sections/InnovationLights';
import Footer from './components/layout/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-neutral-900 text-white overflow-hidden">
        <Header />
        <main>
          <Hero />
          <UrbanLights />
          <CinemaLights />
          <InnovationLights />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;