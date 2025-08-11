


import React, { useState, useEffect } from 'react';
import './styles/Mobile.css';
import PrintHero from './components/PrintHero';
import SamuraiSections from './components/SamuraiSections';
import SamuraiSidebar from './components/SamuraiSidebar';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="japanese-loader">
          <div className="kanji-character">侍</div>
          <div className="loading-text">DARKSEID</div>
          <div className="loading-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <SamuraiSidebar />
      <PrintHero />
      <SamuraiSections />
    </div>
  );
}

export default App;
