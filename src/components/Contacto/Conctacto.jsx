// src/components/pages/Contacto/Contacto.jsx
import React, { useState } from 'react';
import './Contacto.css';

/**
 * Componente de la sección de Contacto.
 * Ofrece canales de comunicación directa y un formulario de mensajes funcional en el cliente.
 */
const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes integrar servicios como EmailJS, Formspree o tu propio backend en Laravel
    alert(`¡Gracias por escribir, ${formData.nombre}! Funcionalidad de envío en desarrollo.`);
    setFormData({ nombre: '', email: '', mensaje: '' });
  };

  return (
    <section className="contact-section">
      <div className="container-fluid px-4 px-md-5">
        
        {/* Título de la Sección */}
        <h2 className="section-title mb-5">Contacto</h2>

        <div className="row g-5">
          
          {/* COLUMNA IZQUIERDA: Información de canales */}
          <div className="col-lg-5 col-md-12 text-start">
            <h3 className="contact-subtitle mb-4">¿Tienes un proyecto en mente?</h3>
            <p className="contact-description mb-5">
              Estoy disponible para proyectos Full Stack, Frontend o Backend independientes, 
              así como para consultorías de software. Escríbeme a través del formulario o 
              conéctate por mis redes profesionales.
            </p>

            {/* Cajas de canales de comunicación */}
            <div className="d-flex flex-column gap-3">
              
              {/* Canal: Correo */}
              <a href="donayrealonso987@gmail.com" className="contact-box p-3 d-flex align-items-center gap-3 text-decoration-none">
                <div className="contact-icon-wrapper">
                  <i className="bi bi-envelope-at-fill"></i>
                </div>
                <div>
                  <span className="contact-box-title">CORREO ELECTRÓNICO</span>
                  <p className="contact-box-value m-0">donayrealonso987@gmail.com</p>
                </div>
              </a>

              {/* Canal: LinkedIn */}
              <a href="https://pe.linkedin.com/in/alonso-saavedra-donayre-62aa2023b" target="_blank" rel="noopener noreferrer" className="contact-box p-3 d-flex align-items-center gap-3 text-decoration-none">
                <div className="contact-icon-wrapper">
                  <i className="bi bi-linkedin"></i>
                </div>
                <div>
                  <span className="contact-box-title">LINKEDIN</span>
                  <p className="contact-box-value m-0">linkedin.com/in/alonso-saavedra-donayre</p>
                </div>
              </a>

              {/* Canal: GitHub */}
              <a href="https://github.com/alonsoSaavedra-03" target="_blank" rel="noopener noreferrer" className="contact-box p-3 d-flex align-items-center gap-3 text-decoration-none">
                <div className="contact-icon-wrapper">
                  <i className="bi bi-github"></i>
                </div>
                <div>
                  <span className="contact-box-title">GITHUB</span>
                  <p className="contact-box-value m-0">github.com/alonsoSaavedra-03</p>
                </div>
              </a>

            </div>
          </div>

          {/* COLUMNA DERECHA: Formulario interactivo */}
          <div className="col-lg-7 col-md-12">
            <div className="contact-form-card p-4 p-md-5">
              <form onSubmit={handleSubmit}>
                
                {/* Input: Nombre */}
                <div className="mb-4 text-start">
                  <label htmlFor="nombre" className="form-label-custom">NOMBRE COMPLETO</label>
                  <input 
                    type="text" 
                    className="form-control-custom" 
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Alonso Saavedra"
                    required 
                  />
                </div>

                {/* Input: Email */}
                <div className="mb-4 text-start">
                  <label htmlFor="email" className="form-label-custom">CORREO ELECTRÓNICO</label>
                  <input 
                    type="email" 
                    className="form-control-custom" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="ejemplo@correo.com"
                    required 
                  />
                </div>

                {/* Input: Mensaje */}
                <div className="mb-4 text-start">
                  <label htmlFor="mensaje" className="form-label-custom">TU MENSAJE</label>
                  <textarea 
                    className="form-control-custom" 
                    id="mensaje"
                    name="mensaje"
                    rows="5"
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder="Hola Alonso, me interesa tu perfil para un proyecto..."
                    required
                  ></textarea>
                </div>

                {/* Botón Enviar */}
                <button type="submit" className="btn btn-contact-submit w-100 mt-2">
                  ENVIAR MENSAJE <span className="arrow">↗</span>
                </button>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contacto;