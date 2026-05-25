// src/components/Navbar/Navbar.jsx
import React from 'react';
import './Navbar.css'; 

/**
 * Componente de navegación principal (Navbar).
 * Muestra el logotipo de la marca y enlaces de navegación centrados en un contenedor.
 * @returns {JSX.Element} Estructura semántica del menú de navegación.
 */
export const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg custom-navbar px-4 py-3 fixed-top"> {/* 💡 Añadimos 'fixed-top' para que el menú siempre quede arriba al bajar */}
        <div className="container">
          {/* Al dar clic aquí, sube al inicio de la página */}
          <a className="navbar-brand logo-neon" href="#inicio">
            PORTFOLIO
          </a>
  
          <button 
            className="navbar-toggler navbar-dark border-0" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
  
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto gap-3">
              <li className="nav-item">
                <a className="nav-link custom-nav-link" href="/">INICIO</a>
              </li>
              <li className="nav-item">
                <a className="nav-link custom-nav-link" href="#perfil">PERFIL</a>
              </li>
              <li className="nav-item">
                <a className="nav-link custom-nav-link" href="#habilidades">HABILIDADES</a>
              </li>
              <li className="nav-item">
                <a className="nav-link custom-nav-link" href="#proyectos">PROYECTOS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link custom-nav-link" href="#certificados">CERTIFICADOS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link custom-nav-link" href="#servicios">SERVICIOS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link custom-nav-link" href="#contacto">CONTACTO</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;