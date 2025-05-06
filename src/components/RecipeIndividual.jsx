import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export default function RecipeIndividual() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    async function fetchRecipe() {
      try {
        const response = await fetch(`http://localhost:3000/api/recipes/${id}`);
        const data = await response.json();
        setRecipe(data);
      } catch (error) {
        console.error("Error fetching recipe:", error);
      }
    }

    fetchRecipe();
  }, [id]);

  if (!recipe)
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <p className="text-muted fs-4">Cargando receta...</p>
      </div>
    );

    return (
      <section className="container py-5" >
        <div className="card mx-auto shadow rounded-4 border-0" style={{ maxWidth: "900px" }}>
          <div className="card-body p-4" >
            <h2 
              className="text-center fw-bold mb-3" 
              style={{ color: "#FFA07A" }} // Naranja pastel
            >
              {recipe.name_recipe}
            </h2>
            <p className="text-center text-muted fs-5 mb-4">{recipe.description}</p>
    
            <div className="row text-center mb-4" >
              <div className="col-md-4">
                <p>
                  <strong style={{ color: "#FFA07A" }}>Tipo:</strong><br />
                  {recipe.tipo}
                </p>
              </div>
              <div className="col-md-4">
                <p>
                  <strong style={{ color: "#FFA07A" }}>Precio:</strong><br />
                  ${recipe.price}
                </p>
              </div>
              <div className="col-md-4">
                <p>
                  <strong style={{ color: "#FFA07A" }}>Tiempo:</strong><br />
                  {recipe.time} min
                </p>
              </div>
            </div>
    
            {recipe.imagenes?.length > 0 && (
              <div className="text-center" id="receipecontainer">
                <img
                  src={recipe.imagenes[0]}
                  alt="Receta"
                  className="img-fluid rounded-3 shadow-sm"
                  style={{ maxHeight: "600px", objectFit: "cover", width: "100%", maxWidth: "100%" }}
                />
              </div>
            )}
          </div>
        </div>
      </section>
    );
    
}
