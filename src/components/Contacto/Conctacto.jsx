// src/components/pages/Contacto/Contacto.jsx

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import './Contacto.css';

const Contacto = () => {

  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const [cargando, setCargando] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setCargando(true);

    try {

      const templateParams = {
        nombre: formData.nombre,
        email: formData.email,
        mensaje: formData.mensaje
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      Swal.fire({
        icon: 'success',
        title: 'Mensaje enviado',
        text: 'Gracias por contactarme.',
        confirmButtonColor: '#111'
      });

      setFormData({
        nombre: '',
        email: '',
        mensaje: ''
      });

    } catch (error) {

      console.error(error);

      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No se pudo enviar el mensaje.'
      });

    } finally {
      setCargando(false);
    }
  };

  return (
    <section className="contact-section">
      <div className="container-fluid px-4 px-md-5">

        <h2 className="section-title mb-5">Contacto</h2>

        <div className="row g-5">

          {/* IZQUIERDA */}
          <div className="col-lg-5 col-md-12 text-start">

            <h3 className="contact-subtitle mb-4">
              ¿Tienes un proyecto en mente?
            </h3>

            <p className="contact-description mb-5">
              Estoy disponible para proyectos Full Stack, Frontend o Backend independientes,
              así como para consultorías de software.
            </p>

            <div className="d-flex flex-column gap-3">

              {/* EMAIL */}
              <a
                href="mailto:donayrealonso987@gmail.com"
                className="contact-box p-3 d-flex align-items-center gap-3 text-decoration-none"
              >
                <div className="contact-icon-wrapper">
                  <i className="bi bi-envelope-at-fill"></i>
                </div>

                <div>
                  <span className="contact-box-title">
                    CORREO ELECTRÓNICO
                  </span>

                  <p className="contact-box-value m-0">
                    donayrealonso987@gmail.com
                  </p>
                </div>
              </a>

              {/* LINKEDIN */}
              <a
                href="https://pe.linkedin.com/in/alonso-saavedra-donayre-62aa2023b"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-box p-3 d-flex align-items-center gap-3 text-decoration-none"
              >
                <div className="contact-icon-wrapper">
                  <i className="bi bi-linkedin"></i>
                </div>

                <div>
                  <span className="contact-box-title">LINKEDIN</span>

                  <p className="contact-box-value m-0">
                    linkedin.com/in/alonso-saavedra-donayre
                  </p>
                </div>
              </a>

              {/* GITHUB */}
              <a
                href="https://github.com/alonsoSaavedra-03"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-box p-3 d-flex align-items-center gap-3 text-decoration-none"
              >
                <div className="contact-icon-wrapper">
                  <i className="bi bi-github"></i>
                </div>

                <div>
                  <span className="contact-box-title">GITHUB</span>

                  <p className="contact-box-value m-0">
                    github.com/alonsoSaavedra-03
                  </p>
                </div>
              </a>

            </div>
          </div>

          {/* DERECHA */}
          <div className="col-lg-7 col-md-12">

            <div className="contact-form-card p-4 p-md-5">

              <form onSubmit={handleSubmit}>

                {/* NOMBRE */}
                <div className="mb-4 text-start">

                  <label htmlFor="nombre" className="form-label-custom">
                    NOMBRE COMPLETO
                  </label>

                  <input
                    type="text"
                    className="form-control-custom"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Alonso Saavedra"
                    required
                    disabled={cargando}
                  />
                </div>

                {/* EMAIL */}
                <div className="mb-4 text-start">

                  <label htmlFor="email" className="form-label-custom">
                    CORREO ELECTRÓNICO
                  </label>

                  <input
                    type="email"
                    className="form-control-custom"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="ejemplo@correo.com"
                    required
                    disabled={cargando}
                  />
                </div>

                {/* MENSAJE */}
                <div className="mb-4 text-start">

                  <label htmlFor="mensaje" className="form-label-custom">
                    TU MENSAJE
                  </label>

                  <textarea
                    className="form-control-custom"
                    id="mensaje"
                    name="mensaje"
                    rows="5"
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder="Hola Alonso, me interesa tu perfil..."
                    required
                    disabled={cargando}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-contact-submit w-100 mt-2"
                  disabled={cargando}
                >
                  {cargando
                    ? 'ENVIANDO...'
                    : 'ENVIAR MENSAJE ↗'}
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