export default function AditionalText() {
  return (
    <div className="featured-categories mb-5">
      {/* Título principal */}
      <h2 className="category-main-title text-center mb-4">
        Las mejores recetas de cocina caseras
      </h2>

      {/* Descripción introductoria */}
      <div className="intro-text mb-5">
        <p>
          Si estás buscando las mejores{" "}
          <strong>recetas de cocina caseras</strong>, has llegado al lugar
          adecuado. En Divina Cocina te mostraremos algunas de las recetas más
          populares y deliciosas que puedes hacer en la comodidad de tu hogar.
          Desde platos principales hasta postres, estas recetas son fáciles de
          seguir y seguramente impresionarán a tus amigos y familiares.
        </p>
      </div>

      {/* Botones de categorías */}
      <div className="category-buttons">
        <div className="row justify-content-center g-3">
          <div className="col-md-3 col-6">
            <a href="#" className="category-button" aria-label="Freidora de Aire">
              Freidora de Aire
            </a>
          </div>
          <div className="col-md-3 col-6">
            <a href="#" className="category-button" aria-label="Ensaladas y Aliños">
              Ensaladas y Aliños
            </a>
          </div>
          <div className="col-md-3 col-6">
            <a href="#" className="category-button" aria-label="Entrantes y tapas">
              Entrantes y tapas
            </a>
          </div>
          <div className="col-md-3 col-6">
            <a href="#" className="category-button" aria-label="Masas y panes">
              Masas y panes
            </a>
          </div>
          <div className="col-md-3 col-6">
            <a href="#" className="category-button" aria-label="Arroces">
              Arroces
            </a>
          </div>
          <div className="col-md-3 col-6">
            <a href="#" className="category-button" aria-label="Pastas">
              Pastas
            </a>
          </div>
          <div className="col-md-3 col-6">
            <a href="#" className="category-button" aria-label="Huevos">
              Huevos
            </a>
          </div>
          <div className="col-md-3 col-6">
            <a href="#" className="category-button" aria-label="Sopas y cremas">
              Sopas y cremas
            </a>
          </div>
          <div className="col-md-3 col-6">
            <a href="#" className="category-button" aria-label="Verduras">
              Verduras
            </a>
          </div>
          <div className="col-md-3 col-6">
            <a href="#" className="category-button" aria-label="Legumbres y cocidos">
              Legumbres y cocidos
            </a>
          </div>
          <div className="col-md-3 col-6">
            <a href="#" className="category-button" aria-label="Pescados y mariscos">
              Pescados y mariscos
            </a>
          </div>
          <div className="col-md-3 col-6">
            <a href="#" className="category-button" aria-label="Carne">
              Carne
            </a>
          </div>
          <div className="col-md-3 col-6">
            <a href="#" className="category-button" aria-label="Pollo y aves">
              Pollo y aves
            </a>
          </div>
          <div className="col-md-3 col-6">
            <a href="#" className="category-button" aria-label="Salsas y guarniciones">
              Salsas y guarniciones
            </a>
          </div>
          <div className="col-md-3 col-6">
            <a href="#" className="category-button" aria-label="Postres">
              Postres
            </a>
          </div>
          <div className="col-md-3 col-6">
            <a href="#" className="category-button" aria-label="Bebidas">
              Bebidas
            </a>
          </div>
          <div className="col-md-3 col-6">
            <a href="#" className="category-button" aria-label="Desayunos">
              Desayunos
            </a>
          </div>
          <div className="col-md-3 col-6">
            <a href="#" className="category-button" aria-label="Almuerzos">
              Almuerzos
            </a>
          </div>
          
        </div>
      </div>

      {/* Estilos personalizados */}
      <style jsx>{`
        .category-main-title {
          font-size: 2rem;
          font-weight: 600;
          color: #333;
          text-align: center;
          margin-bottom: 2rem;
        }

        .intro-text p {
          font-size: 1.1rem;
          color: #555;
          line-height: 1.6;
        }

        .category-button {
          display: block;
          padding: 12px;
          text-align: center;
          background-color: #ff6f61;
          color: white;
          text-decoration: none;
          border-radius: 8px;
          font-weight: 500;
          transition: background-color 0.3s ease, transform 0.3s ease;
          box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
        }

        .category-button:hover {
          background-color: #ff4f3b;
          transform: translateY(-5px);
          color: white;
        }

        .category-button:focus {
          outline: none;
          box-shadow: 0 0 5px rgba(255, 111, 97, 0.7);
        }

        .row .col-md-3 {
          margin-bottom: 15px;
        }

        .g-3 {
          gap: 1rem;
        }
      `}</style>
    </div>
  );
}
