import { useEffect, useState } from "react";

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    apiRecipesAll();
  }, []);


  async function apiRecipesAll() {
    const url = "http://localhost:3000/api/recipes";
    try {
      const respuesta = await fetch(url);
      if (!respuesta.ok) throw new Error(`Error: ${respuesta.status}`);
      const data = await respuesta.json();
      if (Array.isArray(data)) {
        setRecipes(data);
        localStorage.setItem("datosTabla", JSON.stringify(data));
      }
    } catch (error) {
      console.error("Error al obtener recetas:", error);
    }
  }

  return (
    <section className="my-5">
      <h2 className="text-center mb-4">Recetas Destacadas</h2>
      <div className="row g-4">
        {recipes.map((recipe, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 border-0 shadow-sm">
              <img
                src={recipe.imagenes?.[0] || "/placeholder.svg"}
                className="card-img-top"
                alt={recipe.name_recipe}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <span className="badge bg-light text-dark mb-2">{recipe.tipo}</span>
                <h5 className="card-title">{recipe.name_recipe}</h5>
                <p className="card-text">{recipe.description}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <small className="text-muted">⏱️ {recipe.time}</small>
                  <button className="btn btn-outline-primary btn-sm" onClick={() => apiRecipe(recipe.id)}>
                    Ver Receta
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
