// src/components/pages/Certificados/Certificados.jsx
import React from 'react';
import './Certificado.css';

const Certificados = () => {
  
  const listaCertificados = [
    {
      id: 1,
      title: 'Python Nivel 1: Fundamentos',
      issuer: 'Universidad Nacional Mayor de San Marcos',
      type: 'Certificación Académica',
      badgeClass: 'badge-unmsm',
      imgPreview: '/img/awsd.jpg',
      pdfUrl: '/certificados/python1.pdf'
    },
    {
      id: 2,
      title: 'Python Nivel 2: Intermedio',
      issuer: 'Universidad Nacional Mayor de San Marcos',
      type: 'Certificación Académica',
      badgeClass: 'badge-unmsm',
      imgPreview: '/img/python2.jpg',
      pdfUrl: '/certificados/python2.pdf'
    },
    {
      id: 3,
      title: 'Meta Front-End Developer',
      issuer: 'Meta (Courera Professional Certificate)',
      type: 'Certificación Profesional',
      badgeClass: 'badge-meta',
      imgPreview: '/img/meta.jpg',
      pdfUrl: '/certificados/meta-frontend.pdf'
    },
    {
      id: 4,
      title: 'Meta Back-End Developer',
      issuer: 'Meta (Courera Professional Certificate)',
      type: 'Certificación Profesional',
      badgeClass: 'badge-meta',
      imgPreview: '/img/meta.jpg',
      pdfUrl: '/certificados/meta-backend.pdf'
    }
  ];

  return (
    <section className="certificates-section">
      <div className="container-fluid px-4 px-md-5">
        
        <h2 className="section-title mb-5">Certificados</h2>

        {/* 🚀 CAMBIO: Volvemos a la grilla balanceada de 3 columnas (col-lg-4) */}
        <div className="row g-4">
          {listaCertificados.map((cert) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={cert.id}>
              
              <div className="cert-card h-100 d-flex flex-column">
                
                {/* VISTA PREVIA CONTROLADA */}
                <div className="cert-img-container">
                  <img src={cert.imgPreview} alt={cert.title} className="cert-img-top" />
                  <div className="cert-overlay">
                    <span className={`cert-badge-float ${cert.badgeClass}`}>
                      {cert.type}
                    </span>
                  </div>
                </div>

                {/* CONTENIDO TEXTUAL */}
                <div className="cert-content p-4 d-flex flex-column flex-grow-1">
                  <h3 className="cert-title-text mb-2">{cert.title}</h3>
                  <p className="cert-issuer-text mb-4">{cert.issuer}</p>

                  {/* ACCIONES */}
                  <div className="d-flex gap-2 mt-auto">
                    <a 
                      href={cert.pdfUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-cert-view flex-fill"
                    >
                      <i className="bi bi-eye me-1"></i> Ver
                    </a>
                    <a 
                      href={cert.pdfUrl} 
                      download={cert.title} 
                      className="btn btn-cert-download flex-fill"
                    >
                      <i className="bi bi-download me-1"></i> PDF
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

export default Certificados;