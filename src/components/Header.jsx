export default function Header() {
  return (
    <>
      {/* Iconos negros */}
      <div className="bg-dark text-white py-1">
        <div className="container d-flex justify-content-end">
          <div className="social-icons">
            <a href="#" className="text-white me-2">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" className="text-white me-2">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="#" className="text-white me-2">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="#" className="text-white me-2">
              <i className="bi bi-pinterest"></i>
            </a>
            <a href="#" className="text-white">
              <i className="bi bi-youtube"></i>
            </a>
          </div>
        </div>
      </div>
      {/* Header principal */}
      <div className="container text-center py-3">
        <br className="mt-5" />
        <p className="tagline mt-5">Recetas sencillas para alegrarte la vida</p>
      </div>
    </>
  );
}
