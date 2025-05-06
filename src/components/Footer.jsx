import React from 'react';



function Footer() {
  return (
    <footer className="bg-dark text-white mt-0">
      <div className="container py-4">
        <div className="row">
          <div className="col-12 text-center">
            {/* iconos */}
            <div className="social-icons mb-4">
              <a href="#" className="text-white mx-3 social-icon" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-white mx-3 social-icon" aria-label="Twitter">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="text-white mx-3 social-icon" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="text-white mx-3 social-icon" aria-label="Pinterest">
                <i className="bi bi-pinterest"></i>
              </a>
              <a href="#" className="text-white mx-3 social-icon" aria-label="YouTube">
                <i className="bi bi-youtube"></i>
              </a>
              <a href="#" className="text-white mx-3 social-icon" aria-label="Email">
                <i className="bi bi-envelope"></i>
              </a>
            </div>

            {/* Copyright y enlaces */}
            <div className="copyright mb-3">
              <p>
                © Divina Cocina 2024 -{" "}
                <a href="#" className="text-orange">
                  Política de Privacidad
                </a>{" "}
                -{" "}
                <a href="#" className="text-orange">
                  Aviso Legal
                </a>{" "}
                -{" "}
                <a href="#" className="text-orange">
                  Política de Cookies
                </a>{" "}
                -{" "}
                <a href="#" className="text-orange">
                  Contacto
                </a>{" "}
                -{" "}
                <a href="#" className="text-orange">
                  Sitemap
                </a>
              </p>
            </div>

            {/* Texto de powered by */}
            <div className="powered-by">
              <small>Creado por MaCaIs</small>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
