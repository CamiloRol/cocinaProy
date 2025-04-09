export default function Content() {
  return (
    <div className="row">
      {/* título principal */}
      <div className="col-lg-8">
        <h2 className="main-title">DIVINA COCINA - RECETAS FÁCILES</h2>

        <div className="featured-recipe mb-4">
          <img
            src="https://www.divinacocina.es/wp-content/uploads/2025/04/sepia-salteada-con-guisantes-c.jpg"
            alt="Sepia salteada con guisantes y verduras"
            className="img-fluid mb-2"
          />
          <h3 className="recipe-title">
            <a href="#">Sepia salteada con guisantes y verduras</a>
          </h3>
          <div className="rating">
            <span className="stars">★★★★★</span>
            <span className="views">Basado en 4 opiniones</span>
          </div>
        </div>

        {/* Recetas chiquitas */}
        <div className="row smaller-recipes">
          <div className="col-md-6">
            <div className="recipe-card mb-4">
              <img
                src="https://www.divinacocina.es/wp-content/uploads/2025/03/gildas-caseras-de-anchoas-ccc.jpg"
                alt="Todo sobre la gilda y recetas de gildas caseras"
                className="img-fluid mb-2"
              />
              <h4 className="recipe-title">
                <a href="#">Todo sobre la gilda y recetas de gildas caseras</a>
              </h4>
              <div className="rating">
                <span className="stars">★★★★★</span>
                <span className="views">Basado en 3 opiniones</span>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="recipe-card mb-4">
              <img
                src="https://www.divinacocina.es/wp-content/uploads/2025/03/salmon-a-la-naranja-o-mandarina-v.jpg"
                alt="Salmón a la naranja (o mandarina)"
                className="img-fluid mb-2"
              />
              <h4 className="recipe-title">
                <a href="#">Salmón a la naranja (o mandarina)</a>
              </h4>
              <div className="rating">
                <span className="stars">★★★★★</span>
                <span className="views">Basado en 2 opiniones</span>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="recipe-card mb-4">
              <img
                src="https://www.divinacocina.es/wp-content/uploads/2014/06/pisto-de-verduras-con-huevo-c1.jpg"
                alt="Pisto de verduras con huevo"
                className="img-fluid mb-2"
              />
              <h4 className="recipe-title">
                <a href="#">Pisto de verduras con huevo</a>
              </h4>
              <div className="rating">
                <span className="stars">★★★★★</span>
                <span className="views">Basado en 3 opiniones</span>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="recipe-card mb-4">
              <img
                src="https://www.divinacocina.es/wp-content/uploads/2025/01/empanadillas-de-jamon-y-mozzarella-en-airfryer-585x585.jpg"
                alt="Empanadillas de mozzarella y tomate seco en freidora de aire"
                className="img-fluid mb-2"
              />
              <h4 className="recipe-title">
                <a href="#">Empanadillas de mozzarella y tomate seco en freidora de aire</a>
              </h4>
              <div className="rating">
                <span className="stars">★★★★★</span>
                <span className="views">Basado en 3 opiniones</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="col-lg-4">
        <div className="sidebar">
          <div className="category-box">
            <h4 className="category-title">COCINA CASERA Y FAMILIAR</h4>
            <ul className="category-list">
              <li>
                <a href="#">RECETAS CLÁSICAS</a>
              </li>
              <li>
                <a href="#">SALSAS</a>
              </li>
              <li>
                <a href="#">PASTA Y ARROZ</a>
              </li>
              <li>
                <a href="#">VERDURAS</a>
              </li>
              <li>
                <a href="#">SOPAS</a>
              </li>
              <li>
                <a href="#">PLATOS DE CUCHARA</a>
              </li>
              <li>
                <a href="#">GUISOS Y ESTOFADOS</a>
              </li>
              <li>
                <a href="#">COCINA REGIONAL</a>
              </li>
              <li>
                <a href="#">RECETAS SALUDABLES</a>
              </li>
            </ul>
          </div>

          <div className="category-box">
            <h4 className="category-title">POSTRES Y REPOSTERÍA</h4>
            <ul className="category-list">
              <li>
                <a href="#">POSTRES CON CHOCOLATE</a>
              </li>
              <li>
                <a href="#">POSTRES SIN HORNO</a>
              </li>
              <li>
                <a href="#">RECETAS DE BIZCOCHOS</a>
              </li>
              <li>
                <a href="#">POSTRES LIGHT</a>
              </li>
              <li>
                <a href="#">MAGDALENAS Y MUFFINS</a>
              </li>
              <li>
                <a href="#">POSTRES NAVIDEÑOS</a>
              </li>
              <li>
                <a href="#">RECETAS TRADICIONALES</a>
              </li>
              <li>
                <a href="#">POSTRES</a>
              </li>
              <li>
                <a href="#">GALLETAS</a>
              </li>
            </ul>
          </div>

          <div className="category-box">
            <h4 className="category-title">COCINA FÁCIL Y RÁPIDA</h4>
            <ul className="category-list">
              <li>
                <a href="#">CENAS RÁPIDAS</a>
              </li>
              <li>
                <a href="#">RECETAS FÁCILES</a>
              </li>
              <li>
                <a href="#">COCINA PARA VAGOS</a>
              </li>
              <li>
                <a href="#">MICROONDAS</a>
              </li>
              <li>
                <a href="#">PLATOS ÚNICOS</a>
              </li>
              <li>
                <a href="#">RECETAS PARA ESTUDIANTES</a>
              </li>
              <li>
                <a href="#">BATCH COOKING</a>
              </li>
              <li>
                <a href="#">SANDWICHES Y BOCADILLOS</a>
              </li>
            </ul>
          </div>

          <div className="category-box">
            <h4 className="category-title">RECETAS LIGHT Y COCINA SANA</h4>
            <ul className="category-list">
              <li>
                <a href="#">RECETAS LIGHT</a>
              </li>
              <li>
                <a href="#">ENSALADAS</a>
              </li>
              <li>
                <a href="#">SIN LACTOSA</a>
              </li>
              <li>
                <a href="#">SIN GLUTEN</a>
              </li>
              <li>
                <a href="#">ENSALADAS DE VERANO</a>
              </li>
              <li>
                <a href="#">RECETAS PARA DEPORTISTAS</a>
              </li>
            </ul>
          </div>

          <div className="category-box">
            <h4 className="category-title">RECETAS PARA INVITADOS</h4>
            <ul className="category-list">
              <li>
                <a href="#">BOCADITOS PARA FIESTAS</a>
              </li>
              <li>
                <a href="#">BUFFET FRÍO DE FIESTA</a>
              </li>
              <li>
                <a href="#">COMIDAS Y CENAS</a>
              </li>
              <li>
                <a href="#">APERITIVOS</a>
              </li>
              <li>
                <a href="#">BRUNCH</a>
              </li>
              <li>
                <a href="#">FINGERFOOD</a>
              </li>
              <li>
                <a href="#">SALSAS</a>
              </li>
              <li>
                <a href="#">ENSALADAS</a>
              </li>
            </ul>
          </div>

          <div className="category-box">
            <h4 className="category-title">RECETAS DEL MUNDO</h4>
            <ul className="category-list">
              <li>
                <a href="#">ASIÁTICA</a>
              </li>
              <li>
                <a href="#">COCINA MEXICANA</a>
              </li>
              <li>
                <a href="#">COCINA MEDITERRÁNEA</a>
              </li>
              <li>
                <a href="#">COCINA EUROPEA</a>
              </li>
              <li>
                <a href="#">RECETAS AMERICANAS</a>
              </li>
              <li>
                <a href="#">AFRICANA</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
