// src/components/pages/SobreMi/SobreMi.jsx
import React from 'react';
import './Perfil.css';

/**
 * Componente de la sección Sobre Mí.
 * Presenta el perfil profesional detallado y una línea de tiempo educativa.
 */
const Perfil = () => {
  return (
    <section className="about-section py-5">
      <div className="container">
        
        {/* Título de la Sección */}
        <h2 className="section-title mb-5">Sobre mí</h2>

        <div className="row g-4">
          
          {/* TARJETA 1: Perfil Profesional */}
          <div className="col-lg-6 col-md-12">
            <div className="about-card p-4 p-md-5 h-100">
              <div className="card-header-custom d-flex align-items-center gap-3 mb-4">
                <div className="icon-container">
                  <i className="bi bi-person-fill"></i>
                </div>
                <h3 className="card-heading m-0">Perfil profesional</h3>
              </div>
              
              <div className="card-body-custom text-start">
              <p>
                Estudiante de Informática y Desarrollo de Aplicaciones Web en SENATI e Ingeniero de Sistemas Computacionales. Mi mayor fortaleza es mi enfoque analítico y mi capacidad para la resolución lógica de problemas, destacando en la depuración de errores y optimización de código.
                </p>
                <p>
                Cuento con las Certificaciones Internacionales de Meta Platforms en Desarrollo Frontend y Backend, además de una especialización en Python respaldada por la Universidad Nacional Mayor de San Marcos (UNMSM).
                </p>
                <p>
                He consolidado un perfil Fullstack sólido a través de proyectos independientes disponibles en mi GitHub. Busco una oportunidad de prácticas profesionales remuneradas (opcional) donde pueda aplicar estos estándares internacionales, aportar soluciones eficientes a fallas de sistema y continuar con mi capacitación continua.
                </p>
              </div>
            </div>
          </div>

          {/* TARJETA 2: Educación y Línea de Tiempo */}
          <div className="col-lg-6 col-md-12">
            <div className="about-card p-4 p-md-5 h-100">
              <div className="card-header-custom d-flex align-items-center gap-3 mb-4">
                <div className="icon-container">
                  <i className="bi bi-mortarboard-fill"></i>
                </div>
                <h3 className="card-heading m-0">Educación</h3>
              </div>

              {/* Estructura de la Línea de Tiempo */}
              <div className="timeline">
                
                {/* Ítem 1 */}
                <div className="timeline-item">
                  <h4 className="timeline-title">Informatica y desarrollo de aplicaciones web</h4>
                  <span className="badge-custom">En curso</span>
                  <p className="timeline-subtitle">INSTITUTO SENATI</p>
                </div>

                {/* Ítem 2 */}
                <div className="timeline-item">
                  <h4 className="timeline-title">Python</h4>
                  <span className="badge-custom">Certificado</span>
                  <p className="timeline-subtitle">UNIVERSIDAD UNMSM</p>
                </div>

                {/* Ítem 3 */}
                <div className="timeline-item">
                  <h4 className="timeline-title">Frontend</h4>
                  <span className="badge-custom badge-international">Certificación Internacional</span>
                  <p className="timeline-subtitle">META PLATFORMS</p>
                </div>

                {/* Ítem 4 */}
                <div className="timeline-item">
                  <h4 className="timeline-title">Backend</h4>
                  <span className="badge-custom badge-international">Certificación Internacional</span>
                  <p className="timeline-subtitle">META PLATFORMS</p>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Perfil;