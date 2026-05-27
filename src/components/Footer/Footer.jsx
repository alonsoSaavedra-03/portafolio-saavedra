// src/components/Footer/Footer.jsx
import React from 'react';
import './Footer.css';

/**
 * Componente de pie de página (Footer).
 * Muestra los derechos de autor con el nombre del desarrollador y la ubicación con pulso activo.
 * @returns {JSX.Element} Estructura semántica del pie de página.
 */
export const Footer = () => {
  // Obtenemos el año actual de forma dinámica
  const currentYear = new Date().getFullYear();

  return (
    <footer className="custom-footer py-4 px-4">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
        
        {/* Sección de Derechos Reservados */}
        <div className="footer-credits">
          © {currentYear} <span className="highlight-name">ALONSO SAAVEDRA DONAYRE</span> – TODOS LOS DERECHOS RESERVADOS
        </div>
        
        {/* Sección de Ubicación con Pulso Dinámico */}
        <div className="footer-location d-flex align-items-center gap-2">
          <span className="status-pulse"></span>
          LIMA, PERÚ
        </div>

      </div>
    </footer>
  );
};

export default Footer;