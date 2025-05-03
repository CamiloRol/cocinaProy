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
    <section className="container py-5">
      <div className="card mx-auto shadow-lg rounded" style={{ maxWidth: '800px' }}>
        <div className="card-body">
          <h2 className="card-title text-center text-success mb-3">{recipe.name_recipe}</h2>
          <p className="card-text text-center text-secondary mb-4">{recipe.description}</p>
          <div className="row text-center mb-4">
            <div className="col-md-4 mb-2">
              <strong className="text-success">Tipo:</strong> {recipe.tipo}
            </div>
            <div className="col-md-4 mb-2">
              <strong className="text-success">Precio:</strong> ${recipe.price}
            </div>
            <div className="col-md-4 mb-2">
              <strong className="text-success">Tiempo:</strong> {recipe.time} min
            </div>
          </div>
          <div className="row">
            {recipe.imagenes?.map((img, i) => (
              <div key={i} className="col-md-6 mb-3">
                <img
                  src={img}
                  alt={`Imagen ${i}`}
                  className="img-fluid rounded shadow-sm"
                  style={{ objectFit: "cover", height: "250px", width: "100%" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
