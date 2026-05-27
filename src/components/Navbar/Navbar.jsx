// src/components/Navbar/Navbar.jsx
import React, { useState, useEffect } from 'react';
import './Navbar.css'; 

export const Navbar = () => {
  // Estado para saber si el usuario bajó la página
  const [isScrolled, setIsScrolled] = useState(false);
  
  // NUEVO ESTADO PARA CONTROLAR EL MENÚ DESPLEGABLE EN MÓVILES
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Si el scroll baja más de 50 píxeles, activamos el efecto burbuja
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Limpiamos el evento al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Función para alternar el menú (abrir/cerrar) al tocar la hamburguesa
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // ─── FUNCIÓN PARA RECTIFICAR EL COMPORTAMIENTO MÓVIL ───
  const handleNavLinkClick = () => {
    setIsOpen(false);
  };

  return (
    /* Usamos una plantilla de JavaScript para añadir las clases de scroll y el estado del contenedor */
    <nav className={`navbar navbar-expand-lg fixed-top custom-navbar ${isScrolled ? 'scrolled-bubble' : 'normal-navbar'}`}>
      <div className="container">
        
        {/* Marca / Logotipo Formalizado */}
        <a className="navbar-brand logo-neon" href="#inicio" onClick={handleNavLinkClick}>
          A<span className="dot-gray">.</span>SAAVEDRA
        </a>

        {/* Botón Hamburguesa Controlado por React */}
        <button 
          className={`navbar-toggler navbar-dark border-0 ${isOpen ? '' : 'collapsed'}`} 
          type="button" 
          aria-controls="navbarNav" 
          aria-expanded={isOpen} 
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* INYECCIÓN DINÁMICA DE LA CLASE 'SHOW' DE BOOTSTRAP */}
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto gap-3">
            
            {/* Escuchamos el evento onClick en cada enlace para bajar el menú en móviles */}
            <li className="nav-item">
              <a className="nav-link custom-nav-link" href="#inicio" onClick={handleNavLinkClick}>INICIO</a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-nav-link" href="#perfil" onClick={handleNavLinkClick}>PERFIL</a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-nav-link" href="#habilidades" onClick={handleNavLinkClick}>HABILIDADES</a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-nav-link" href="#proyectos" onClick={handleNavLinkClick}>PROYECTOS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-nav-link" href="#certificados" onClick={handleNavLinkClick}>CERTIFICADOS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-nav-link" href="#servicios" onClick={handleNavLinkClick}>SERVICIOS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-nav-link" href="#contacto" onClick={handleNavLinkClick}>CONTACTO</a>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;