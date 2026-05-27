// src/components/Footer/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        
        <p className="footer-text">
          © {currentYear} <span className="footer-name">ALONSO SAAVEDRA DONAYRE</span> – TODOS LOS DERECHOS RESERVADOS
        </p>

        <div className="footer-location-wrapper">
          <span className="footer-dot"></span>
          <p className="footer-text">LIMA, PERÚ</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;