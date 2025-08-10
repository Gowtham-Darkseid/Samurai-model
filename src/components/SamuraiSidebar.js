import React, { useState } from 'react';
import './SamuraiSidebar.css';

const SamuraiSidebar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const menuItems = [
    {
      id: 'home',
      icon: '⚔️',
      label: 'Bushido',
      section: 'hero'
    },
    {
      id: 'legacy',
      icon: '🗾',
      label: 'Legacy',
      section: 'legacy'
    },
    {
      id: 'arts',
      icon: '🥷',
      label: 'Dark Arts',
      section: 'dark-arts'
    },
    {
      id: 'mystical',
      icon: '🌸',
      label: 'Mystical',
      section: 'mystical'
    },
    {
      id: 'contact',
      icon: '📜',
      label: 'Scroll',
      section: 'contact'
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Hover trigger area */}
      <div 
        className="sidebar-hover-trigger"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      ></div>

      <div 
        className={`floating-samurai-sidebar ${isVisible ? 'visible' : ''}`}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="floating-nav-item"
            onClick={() => scrollToSection(item.section)}
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div className="floating-nav-icon">{item.icon}</div>
            <div className={`floating-nav-tooltip ${hoveredItem === item.id ? 'show' : ''}`}>
              {item.label}
            </div>
            <div className="floating-nav-glow"></div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SamuraiSidebar;
