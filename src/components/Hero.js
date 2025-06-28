import React from 'react';
import './Hero.css';
import heroBild from '../assets/images/hero-bild.jpg';

function Hero() {
  return (
    <div
      className="hero"
      style={{ backgroundImage: `url(${heroBild})` }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Willkommen bei Taunus Gebäudeservice</h1>
          <a href="#leistungen" className="hero-button">Mehr erfahren</a>
        </div>
      </div>
    </div>
  );
}

export default Hero;