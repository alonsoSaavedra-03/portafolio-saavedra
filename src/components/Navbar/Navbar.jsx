// src/components/Navbar/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

/**
 * Componente de navegación principal (Navbar).
 * Muestra el logotipo de la marca y enlaces de navegación centrados en un contenedor.
 * @returns {JSX.Element} Estructura semántica del menú de navegación.
 */
export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar px-4 py-3">
      {/* CAMBIO CLAVE: Cambiamos 'container-fluid' por 'container' */}
      <div className="container">
        {/* Logotipo del portafolio */}
        <Link className="navbar-brand logo-neon" to="/">
          PORTFOLIO
        </Link>

        {/* Botón para pantallas móviles (Hamburguesa) */}
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

        {/* Enlaces de navegación alineados a la derecha */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-3">
            <li className="nav-item">
              <Link className="nav-link custom-nav-link" to="/">INICIO</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-nav-link" to="/sobre-mi">SOBRE MÍ</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-nav-link" to="/habilidades">HABILIDADES</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-nav-link" to="/proyectos">PROYECTOS</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-nav-link" to="/contacto">CONTACTO</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;