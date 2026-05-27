// src/components/Loader/Loader.jsx
import React from 'react';
import './Loader.css';

const Loader = ({ progreso }) => {
  const esFin = progreso >= 100;

  // El cálculo dashoffset controla cuánto se dibuja el SVG (de 1000 que es oculto a 0 que es completo)
  const dashOffset = 1000 - (progreso * 10);

  return (
    <div className={`loader-wrapper ${esFin ? 'loader-fade-out' : ''}`}>
      
      {/* CONTENEDOR DE RAÍCES VECTORIALES (Sincronizadas con React) */}
      <svg className="loader-roots-svg" viewBox="0 0 1000 1000" preserveAspectRatio="none">
        
        {/* Raíz Esquina Superior Izquierda */}
        <path 
          className="root-path" 
          style={{ strokeDashoffset: dashOffset }}
          d="M 0,0 C 150,50 100,250 250,300 C 350,320 300,450 500,500" 
        />
        <path 
          className="root-path-sub branch-1" 
          style={{ strokeDashoffset: dashOffset + 150 }}
          d="M 120,130 C 200,200 180,350 350,380" 
        />
        
        {/* Raíz Esquina Superior Derecha */}
        <path 
          className="root-path" 
          style={{ strokeDashoffset: dashOffset }}
          d="M 1000,0 C 850,50 900,250 750,300 C 650,320 700,450 500,500" 
        />
        <path 
          className="root-path-sub branch-2" 
          style={{ strokeDashoffset: dashOffset + 150 }}
          d="M 880,130 C 800,200 820,350 650,380" 
        />
        
        {/* Raíz Esquina Inferior Izquierda */}
        <path 
          className="root-path" 
          style={{ strokeDashoffset: dashOffset }}
          d="M 0,1000 C 150,950 100,750 250,700 C 350,680 300,550 500,500" 
        />
        <path 
          className="root-path-sub branch-3" 
          style={{ strokeDashoffset: dashOffset + 150 }}
          d="M 120,870 C 200,800 180,650 350,620" 
        />
        
        {/* Raíz Esquina Inferior Derecha */}
        <path 
          className="root-path" 
          style={{ strokeDashoffset: dashOffset }}
          d="M 1000,1000 C 850,950 900,750 750,700 C 650,680 700,550 500,500" 
        />
        <path 
          className="root-path-sub branch-4" 
          style={{ strokeDashoffset: dashOffset + 150 }}
          d="M 880,870 C 800,800 820,650 650,620" 
        />
      </svg>

      {/* NÚCLEO CENTRAL DE ENERGÍA */}
      <div className={`energy-core ${progreso >= 30 ? 'core-visible' : ''} ${esFin ? 'core-detonate' : ''}`}>
        <div className="core-glow-layer"></div>
      </div>

      {/* CONTENEDOR DE TEXTOS */}
      <div className={`loader-content ${esFin ? 'content-explode' : ''}`}>
        <h2 className="loader-title">Alonso Saavedra</h2>
        
        <div className="loader-bar-container">
          <div 
            className="loader-bar" 
            style={{ width: `${progreso}%` }}
          ></div>
        </div>
        
        <p className={`loader-text ${esFin ? 'ready' : ''}`}>
          {esFin ? "SISTEMA INICIALIZADO" : `CONECTANDO CON LA WEB... ${progreso}%`}
        </p>
      </div>

    </div>
  );
};

export default Loader;