import React from 'react';
import './SamuraiSections.css';
import statueImg from '../assets/statue.png';

const SamuraiSections = () => {
  return (
    <>
      {/* Samurai Legacy Section */}
      <section className="samurai-legacy" id="legacy">
        <div className="legacy-bg-overlay"></div>
        <div className="legacy-content">
          <div className="legacy-text">
            <h2 className="legacy-title">THE WAY OF THE BLADE</h2>
            <p className="legacy-description">
              Honor transcends time. In the shadows of ancient traditions, 
              a warrior's spirit emerges through the darkness. Each step forward 
              carries the weight of a thousand ancestors.
            </p>
            <div className="legacy-stats">
              <div className="stat">
                <span className="stat-number">1000</span>
                <span className="stat-label">Years of Honor</span>
              </div>
              <div className="stat">
                <span className="stat-number">7</span>
                <span className="stat-label">Sacred Virtues</span>
              </div>
              <div className="stat">
                <span className="stat-number">∞</span>
                <span className="stat-label">Eternal Legacy</span>
              </div>
            </div>
          </div>
          <div className="legacy-visual">
            <div className="samurai-silhouette">
              <img src={statueImg} alt="Samurai Statue" />
              <div className="energy-aura"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Arts Section */}
      <section className="dark-arts" id="dark-arts">
        <div className="dark-particles"></div>
        <div className="arts-container">
          <h2 className="arts-title">SHADOW TECHNIQUES</h2>
          <div className="techniques-grid">
            <div className="technique-card">
              <div className="card-glow"></div>
              <h3>Kenjutsu</h3>
              <p>The art of the sword, refined through centuries of discipline</p>
            </div>
            <div className="technique-card">
              <div className="card-glow"></div>
              <h3>Ninjutsu</h3>
              <p>Stealth and strategy, moving like shadows in the night</p>
            </div>
            <div className="technique-card">
              <div className="card-glow"></div>
              <h3>Bushido</h3>
              <p>The code of honor that guides the warrior's path</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mystical Presence Section */}
      <section className="mystical-presence" id="mystical">
        <div className="mystical-bg"></div>
        <div className="presence-content">
          <div className="mystical-text">
            <span className="mystical-subtitle">Ancient Power</span>
            <h2 className="mystical-title">SPIRIT OF THE WARRIOR</h2>
            <p className="mystical-description">
              Beyond the physical realm lies the true essence of the samurai. 
              A presence that commands respect, instills fear, and embodies 
              the eternal struggle between light and darkness.
            </p>
            <button className="mystical-btn">
              <span>Embrace the Darkness</span>
              <div className="btn-glow"></div>
            </button>
          </div>
          <div className="mystical-visual">
            <div className="energy-circle">
              <div className="inner-circle"></div>
              <div className="outer-ring"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="samurai-footer" id="contact">
        <div className="footer-content">
          <div className="footer-section">
            <h3>DARKSEID</h3>
            <p>Where tradition meets darkness</p>
          </div>
          <div className="footer-section">
            <h4>Path</h4>
            <ul>
              <li>Honor</li>
              <li>Discipline</li>
              <li>Courage</li>
              <li>Loyalty</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Techniques</h4>
            <ul>
              <li>Sword Arts</li>
              <li>Shadow Steps</li>
              <li>Mind Training</li>
              <li>Spirit Focus</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Legacy</h4>
            <ul>
              <li>Ancient Wisdom</li>
              <li>Modern Application</li>
              <li>Future Vision</li>
              <li>Eternal Code</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <p>&copy; 2025 DARKSEID. All rights reserved. The way of the warrior lives on.</p>
        </div>
      </footer>
    </>
  );
};

export default SamuraiSections;
