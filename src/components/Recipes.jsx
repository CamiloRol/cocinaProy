export default function Recipes() {
    return (  
      <section className="my-5">
        <h2 className="text-center mb-4">Recetas Destacadas</h2>
        <div className="row g-4">
          {recipes.map((recipe, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <img
                  src={recipe.image || "/placeholder.svg"}
                  className="card-img-top"
                  alt={recipe.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <span className="badge bg-light text-dark mb-2">{recipe.category}</span>
                  <h5 className="card-title">{recipe.title}</h5>
                  <p className="card-text">{recipe.description}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">⏱️ {recipe.time}</small>
                    <button className="btn btn-outline-primary btn-sm" onClick={apiRecipe}>Ver Receta</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <button className="btn btn-primary" onClick={apiRecipesAll}>Ver Más Recetas</button>
        </div>
      </section>
    )
  }

  async function apiRecipesAll() {
    let url="http://localhost:3006/api/Recipes"
    try {
      let respuesta = await fetch(url, {
          method: "GET",
          headers: {
              "Content-Type": "application/json",
          },
      });
      if (respuesta.status === 204) {
          console.log("No hay datos en la base de datos");
          return;  // Si no hay datos, no seguimos ejecutando el código
      } else {
          let tableData = await respuesta.json();
          console.log(tableData);
          // Solo actualiza localStorage si se obtuvieron datos
          if (tableData && tableData.length > 0) {
              localStorage.setItem("datosTabla", JSON.stringify(tableData));
              renderTable(tableData);  // Llama a una función separada para renderizar la tabla
          }
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  async function apiRecipe() {
    let url="http://localhost:3006/api/Recipes"
    try {
      let respuesta = await fetch(url, {
          method: "GET",
          headers: {
              "Content-Type": "application/json",
          },
      });
      if (respuesta.status === 204) {
          console.log("No hay datos en la base de datos");
          return;  // Si no hay datos, no seguimos ejecutando el código
      } else {
          let tableData = await respuesta.json();
          console.log(tableData);
          // Solo actualiza localStorage si se obtuvieron datos
          if (tableData && tableData.length > 0) {
              localStorage.setItem("datosTabla", JSON.stringify(tableData));
              renderTable(tableData);  // Llama a una función separada para renderizar la tabla
          }
      }
    } catch (error) {
      console.log(error);
    }
  }