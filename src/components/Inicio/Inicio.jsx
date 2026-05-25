// src/components/pages/Inicio/Inicio.jsx
import React from 'react';
import './Inicio.css';

/**
 * Componente de la página de Inicio (Hero Section).
 * Presenta el perfil del desarrollador con su nombre, descripción, foto y datos clave.
 * Mantiene una simetría matemática en los ejes X e Y usando utilidades Flexbox de Bootstrap.
 */
const Inicio = () => {
  return (
    <section className="hero-section d-flex align-items-center">
      <div className="container">
        {/* 'align-items-center' nivela horizontalmente el centro geométrico de las 3 columnas principales */}
        <div className="row align-items-center justify-content-between gy-5">
          
          {/* COLUMNA 1: Textos Principales */}
          <div className="col-lg-5 col-md-12 text-start">
            <span className="badge-status">
              — PROGRAMADOR FULLSTACK
            </span>
            
            <h1 className="hero-title mt-4">
              Alonso <br />
              <span className="text-neon">Saavedra<span className="dot-gray">.</span></span>
            </h1>
            
            <p className="hero-description mt-4">
              Desarrollador Full Stack enfocado en crear experiencias rápidas, modernas y escalables.
              Construyo productos digitales con código limpio y diseño intencional.
            </p>
          </div>

          {/* COLUMNA 2: Fotografía de Perfil */}
          <div className="col-lg-3 col-md-6 text-center">
            <div className="hero-image-container">
              <img 
                src="/src/assets/foto-perfil.png" 
                alt="Alonso Saavedra" 
                className="hero-profile-img"
              />
            </div>
          </div>

          {/* COLUMNA 3: Cajas de Información y Acción */}
          <div className="col-lg-4 col-md-6">
            {/* CORRECCIÓN CLAVE: Añadimos 'h-100' y 'justify-content-center' para forzar el equilibrado vertical exacto */}
            <div className="d-flex flex-column gap-3 info-boxes-container h-100 justify-content-center">
              
              {/* Caja: Ubicación */}
              <div className="info-box">
                <span className="info-box-title">UBICACIÓN</span>
                <p className="info-box-value">Lima, Perú</p>
              </div>

              {/* Caja: Enfoque */}
              <div className="info-box">
                <span className="info-box-title">ENFOQUE</span>
                <p className="info-box-value">Construyendo proyectos y mejorando habilidades</p>
              </div>

              {/* Contenedor de Botones de Acción en una sola línea */}
              <div className="d-flex gap-2 mt-2 w-100">
                {/* Botón Primario: Habilidades */}
                <a href="#habilidades" className="btn btn-neon-action w-50 text-center text-truncate">
                  HABILIDADES <span className="arrow">↗</span>
                </a>
                
                {/* Botón Secundario: Proyectos */}
                <a href="#proyectos" className="btn btn-neon-outline w-50 text-center text-truncate">
                  PROYECTOS <span className="arrow">↗</span>
                </a>
              </div>
              
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Inicio;