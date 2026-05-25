// src/components/pages/Servicios/Servicios.jsx
import React from 'react';
import './Servicios.css';

/**
 * Componente de la sección de Servicios.
 * Presenta las soluciones tecnológicas orientadas al desarrollo Frontend, Backend y Full Stack.
 */
const Servicios = () => {
  
  const misServicios = [
    {
      id: 1,
      title: 'Desarrollo Frontend',
      icon: 'bi-window-fullscreen',
      description: 'Construcción de interfaces de usuario (UI) modernas, intuitivas y completamente responsivas. Enfoque en optimización de rendimiento, velocidad de carga y experiencias interactivas fluidas.',
      features: ['Aplicaciones SPA con React', 'Maquetación semántica y limpia', 'Diseño Adaptativo (Mobile First)', 'Optimización SEO y accesibilidad']
    },
    {
      id: 2,
      title: 'Desarrollo Backend',
      icon: 'bi-cpu',
      description: 'Arquitectura lógica y estructuración de servidores potentes y seguros. Creación de sistemas capaces de procesar flujos complejos de información y comunicarse de manera eficiente.',
      features: ['Desarrollo de API RESTful', 'Lógica de negocio en Laravel / Python', 'Modelado y optimización de bases de datos', 'Autenticación y seguridad de datos']
    },
    {
      id: 3,
      title: 'Soluciones Full Stack',
      icon: 'bi-layers-half',
      description: 'Desarrollo integral de punta a punta (End-to-End). Desde la concepción de la base de datos y la arquitectura del servidor, hasta el despliegue de la interfaz visual completamente conectada.',
      features: ['Sistemas web integrales listos para usar', 'Conexión perfecta Front/Back', 'Estructuras escalables y limpias', 'Despliegue y configuración en producción']
    }
  ];

  return (
    <section className="services-section">
      <div className="container-fluid px-4 px-md-5">
        
        {/* Título de la Sección */}
        <h2 className="section-title mb-5">Servicios</h2>

        {/* Grilla de 3 Columnas */}
        <div className="row g-4">
          {misServicios.map((servicio) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={servicio.id}>
              
              {/* Tarjeta de Servicio */}
              <div className="service-card p-4 p-md-5 h-100 d-flex flex-column">
                
                {/* Cabecera: Icono Neón */}
                <div className="service-icon-wrapper mb-4">
                  <i className={`bi ${servicio.icon}`}></i>
                </div>

                {/* Contenido principal */}
                <div className="service-body text-start mb-4">
                  <h3 className="service-card-title mb-3">{servicio.title}</h3>
                  <p className="service-card-description mb-4">{servicio.description}</p>
                </div>

                {/* Lista de características/entregables */}
                <ul className="service-features-list p-0 m-0 mt-auto">
                  {servicio.features.map((feature, index) => (
                    <li key={index} className="service-feature-item d-flex align-items-start gap-2 mb-2">
                      <i className="bi bi-chevron-right arrow-neon"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Servicios;