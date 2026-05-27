// src/components/pages/Proyectos/Proyectos.jsx
import React from 'react';
import './Proyecto.css';

/**
 * Componente de la sección de Proyectos.
 * Despliega 4 trabajos organizados en una simétrica grilla de 2x2.
 */
const Proyectos = () => {
  
  const listaProyectos = [
    {
      id: 1,
      title: 'Dashboard de una Clínica',
      description: 'Plataforma integral para la gestión de centros de salud. Permite agendar, reprogramar y cancelar citas médicas en tiempo real para pacientes y doctores, con analíticas de asistencia.',
      tags: ['Laravel', 'PHP', 'MySQL', 'Bootstrap'],
      image: '/img/proyect1.jpg',
      githubLink: 'https://github.com/alonsoSaavedra-03/Clinica_Proyecto',
      demoLink: 'https://saludvida.xo.je'
    },
    {
      id: 2,
      title: 'Gestión de Citas Multifuncional',
      description: 'Panel administrativo abstracto adaptable tanto para las reservas de un restaurante como para los turnos de una clínica. Incluye roles de usuario y optimización de consultas.',
      tags: ['PHP', 'PostgreSQL', 'JavaScript', 'React'],
      image: '/img/proyect2.jpg',
      githubLink: 'https://github.com/alonsoSaavedra-03/app-gestion-citas/',
      demoLink: 'https://knightxhornet.com'
    },
    {
      id: 3,
      title: 'Gestion de una Institucion Educativa',
      description: 'Sistema de gestión para la administración de estudiantes, docentes y cursos en una institución educativa.',
      tags: ['JavaScript Vanilla', 'Php', 'Html', 'Css', 'Bootstrap', 'Mysql'],
      image: '/img/proyect3.png',
      githubLink: 'https://github.com/alonsoSaavedra-03/Semana01-programaci-n',
      demoLink: 'https://alonso-saavedra.xo.je/'
    },
    {
      id: 4,
      title: 'Portafolio web personal',
      description: 'Portafolio web personal desarrollado con React y Vite, diseñado para mostrar proyectos, habilidades y experiencia de manera profesional y atractiva.',
      tags: ['React', 'JavaScript', 'Bootstrap', 'Css', 'Vite'],
      image: '/img/proyect4.png',
      githubLink: 'https://github.com/alonsoSaavedra-03/portafolio-saavedra',
      demoLink: 'https://portafolio-saavedra.vercel.app/'
    }
  ];

  return (
    <section className="projects-section">
      <div className="container-fluid px-4 px-md-5">
        
        {/* Título de la Sección */}
        <h2 className="section-title mb-5">Proyectos</h2>

        {/* ESTRUCTURA 2x2 */}
        <div className="row g-4">
          {listaProyectos.map((proyecto) => (
            <div className="col-lg-6 col-md-12 col-sm-12" key={proyecto.id}>
              
              {/* Tarjeta del Proyecto */}
              <div className="project-card h-100 d-flex flex-column">
                
                {/* Contenedor de la Imagen con Altura Controlada */}
                <div className="project-image-wrapper">
                  <img 
                    src={proyecto.image} 
                    alt={proyecto.title} 
                    className="project-img" 
                  />
                </div>

                {/* Contenido de la Tarjeta */}
                <div className="project-content p-4 p-md-5 d-flex flex-column flex-grow-1">
                  <h3 className="project-card-title mb-3">{proyecto.title}</h3>
                  <p className="project-card-description mb-4">{proyecto.description}</p>
                  
                  {/* Etiquetas de Tecnologías (Tags) */}
                  <div className="project-tags-container d-flex flex-wrap gap-2 mb-4 mt-auto">
                    {proyecto.tags.map((tag, index) => (
                      <span key={index} className="project-tag-badge">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Botones de Acción */}
                  <div className="project-actions-container d-flex gap-3">
                    <a 
                      href={proyecto.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-project-code flex-fill"
                    >
                      <i className="bi bi-github me-2"></i> Código
                    </a>
                    <a 
                      href={proyecto.demoLink} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`btn btn-project-demo flex-fill ${proyecto.demoLink === '#' ? 'disabled' : ''}`}
                    >
                      Ver Demo <span className="arrow-icon-small">↗</span>
                    </a>
                  </div>

                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Proyectos;