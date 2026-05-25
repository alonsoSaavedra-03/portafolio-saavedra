// src/components/Footer/Footer.jsx
import React from 'react';
import './Footer.css';

/**
 * Componente de pie de página (Footer).
 * Muestra los derechos de autor con el nombre del desarrollador y la ubicación actual dentro de un contenedor alineado.
 * @returns {JSX.Element} Estructura semántica del pie de página.
 */
export const Footer = () => {
  // Obtenemos el año actual de forma dinámica para evitar código duro (hardcoding)
  const currentYear = new Date().getFullYear();

  return (
    <footer className="custom-footer py-4 px-4">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
        {/* Sección de Derechos Reservados */}
        <div className="footer-credits">
          © {currentYear} ALONSO SAAVEDRA DONAYRE – TODOS LOS DERECHOS RESERVADOS
        </div>
        
        {/* Sección de Ubicación */}
        <div className="footer-location">
          LIMA, PERÚ
        </div>
      </div>
    </footer>
  );
};

export default Footer;