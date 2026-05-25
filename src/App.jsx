// src/App.jsx
import React from 'react';
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
  return (
    <>
      // src/App.jsx

      <Navbar />
            
      {/* Todo el contenido vive en este contenedor principal */}
      <main style={{ backgroundColor: 'var(--color-bg-dark)', paddingTop: '90px' }}>
        
        {/* SECCIÓN 1: INICIO */}
        <section id="inicio">
          <Inicio />
        </section>
        
        {/* SECCIÓN 2: SOBRE MÍ / PERFIL */}
        <section id="perfil" className="about-section">
          <Perfil />
        </section>

        {/* SECCIÓN 3: HABILIDADES */}
        <section id="habilidades" className="container py-5 text-white">
          <Habilidades />
        </section>

        {/* SECCIÓN 4: PROYECTOS */}
        <section id="proyectos" className="container py-5 text-white">
          <Proyecto />
        </section>

        {/* SECCIÓN 5: CERTIFICADOS */}
        <section id="certificados" className="container py-5 text-white">
          <Certificado />
        </section>

        {/* SECCIÓN 6: SERVICIOS */}
        <section id="servicios" className="container py-5 text-white">
          <Servicios />
        </section>

        {/* SECCIÓN 7: CONTACTO */}
        <section id="contacto" className="container py-5 text-white">
          <Contacto />
        </section>

      </main>

      <Footer />
    </>
  );
}

export default App;
