// src/components/pages/Habilidades/Habilidades.jsx
import React from 'react';
import './Habilidades.css';

/**
 * Componente de la sección de Habilidades (Skills) con Logotipos.
 * Renderiza las tecnologías organizadas en sub-grillas con sus respectivos iconos vectoriales.
 */
const Habilidades = () => {
  
  // Estructura de datos escalable optimizada con las clases de Devicon
  const categories = [
    {
      id: 1,
      title: 'Frontend Development',
      icon: 'bi-code-slash',
      skills: [
        { name: 'HTML5', iconClass: 'devicon-html5-plain colored' },
        { name: 'CSS3', iconClass: 'devicon-css3-plain colored' },
        { name: 'JavaScript', iconClass: 'devicon-javascript-plain colored' },
        { name: 'Bootstrap', iconClass: 'devicon-bootstrap-plain colored' }
      ]
    },
    {
      id: 2,
      title: 'Backend Development',
      icon: 'bi-database-fill-gear',
      skills: [
        { name: 'JavaScript', iconClass: 'devicon-nodejs-plain colored' },
        { name: 'PHP', iconClass: 'devicon-php-plain colored' },
        { name: 'Laravel', iconClass: 'devicon-laravel-original colored' },
        { name: 'Python', iconClass: 'devicon-python-plain colored' }
      ]
    },
    {
      id: 3,
      title: 'Herramientas y DB',
      icon: 'bi-tools',
      skills: [
        { name: 'MySQL', iconClass: 'devicon-mysql-original colored' },
        { name: 'PostgreSQL', iconClass: 'devicon-postgresql-plain colored' },
        { name: 'GitHub', iconClass: 'devicon-github-original' },
        { name: 'Git Bash', iconClass: 'devicon-git-plain colored' }
      ]
    }
  ];

return (
    <section className="skills-section py-5">
      <div className="container-fluid px-4 px-md-5">
        
        {/* Título de la Sección */}
        <h2 className="section-title mb-5 title-habi">Habilidades</h2>
        
        {/* Grilla Principal de las 3 Categorías */}
        <div className="row g-4">
          {categories.map((category) => (
            <div className="col-lg-4 col-md-12" key={category.id}>
              
              {/* Tarjeta de la Categoría */}
              <div className="skills-card p-4 h-100">
                
                {/* Encabezado */}
                <div className="skills-card-header d-flex align-items-center gap-3 mb-4">
                  <div className="skills-icon-container">
                    <i className={`bi ${category.icon}`}></i>
                  </div>
                  <h3 className="skills-card-heading m-0">{category.title}</h3>
                </div>
  
                {/* Sub-grilla interna para los logos */}
                <div className="row g-3">
                  {category.skills.map((skill, index) => (
                    <div className="col-6" key={index}>
                      
                      {/* Recuadro Individual Oscuro */}
                      <div className="tech-box p-3 d-flex flex-column align-items-center justify-content-center gap-2">
                        <div className="tech-icon-wrapper">
                          <i className={`${skill.iconClass}`}></i>
                        </div>
                        <span className="tech-name">{skill.name}</span>
                      </div>
  
                    </div>
                  ))}
                </div>
  
              </div>
  
            </div>
          ))}
        </div>
  
      </div>
    </section>
  );
};

export default Habilidades;