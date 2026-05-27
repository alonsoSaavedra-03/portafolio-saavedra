// src/App.jsx
import React, { useState, useEffect } from 'react';
import './App.css';
import Loader from './components/Loader/Loader';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Inicio from './components/Inicio/Inicio';
import Perfil from './components/Perfil/Perfil';
import Habilidades from './components/Habilidades/Habilidades';
import Proyecto from './components/Proyecto/Proyecto';
import Certificado from './components/Certificado/Certificado';
import Servicios from './components/Servicios/Servicios';
import Contacto from './components/Contacto/Conctacto';

function App() {
  const [loading, setLoading] = useState(true);
  const [progreso, setProgreso] = useState(0);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
      // Simulador del progreso de la barra y raíces
      const intervalo = setInterval(() => {
        setProgreso((prev) => {
          // Reductor de velocidad para el Loader
          const siguiente = prev + Math.floor(Math.random() * 4) + 2;
          
          if (siguiente >= 100) {
            clearInterval(intervalo);
            
            // Tiempo de carga entre el Loader y el contenido principal
            setTimeout(() => {
              setLoading(false);
            }, 300);
            
            return 100;
          }
          return siguiente;
        });
      }, 140);

      return () => clearInterval(intervalo);
    }, []);

  // Restriccion del scroll para el botón flotante
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (loading) {
    return <Loader progreso={progreso} />;
  }

  return (
    <>
      <Navbar />
          
      <main className="main-content">
        <section id="inicio">
          <Inicio />
        </section>
        
        <section id="perfil" className="about-section">
          <Perfil />
        </section>

        <section id="habilidades" className="container py-5 text-white">
          <Habilidades />
        </section>

        <section id="proyectos" className="container py-5 text-white">
          <Proyecto />
        </section>

        <section id="certificados" className="container py-5 text-white">
          <Certificado />
        </section>

        <section id="servicios" className="container py-5 text-white">
          <Servicios />
        </section>

        <section id="contacto" className="container py-5 text-white">
          <Contacto />
        </section>
      </main>

      <button 
        className={`scroll-to-top-btn ${showButton ? 'visible' : ''}`} 
        onClick={scrollToTop}
        aria-label="Volver arriba"
      >
        <i className="bi bi-arrow-up-short"></i>
      </button>

      <Footer />
    </>
  );
}

export default App;