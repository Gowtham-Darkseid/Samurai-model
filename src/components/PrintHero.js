import React from 'react';
import './PrintHero.css';
import samuraiImg from '../assets/samurai.png';

const PrintHero = () => {
  return (
    <div className="print-hero-bg" id="hero">
      <div className="print-hero-center">
        <div className="print-hero-img-wrap">
          <img src={samuraiImg} alt="PRINT" className="print-hero-img" />
          <div className="print-hero-title">DARKSEID</div>
          <div className="print-hero-blvk">BLVK<span className="print-hero-blvk-underline"></span></div>
          <div className="print-hero-circle"></div>
        </div>
      </div>
      <div className="print-hero-corner print-hero-corner-tl">01<br/>00-93</div>
      <div className="print-hero-corner print-hero-corner-tr">2<br/>93</div>
      <div className="print-hero-corner print-hero-corner-bl">HOME &nbsp; ABOUT &nbsp; PROJECTS &nbsp; WHAT WE DO &nbsp; <span className="active">CONTACT</span></div>
      <div className="print-hero-corner print-hero-corner-br">01&nbsp;&nbsp;02&nbsp;&nbsp;03&nbsp;&nbsp;04<br/>05</div>
    </div>
  );
};

export default PrintHero;
