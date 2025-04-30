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

  if (!recipe) return <p className="text-center">Cargando receta...</p>;

  return (
    <section className="container mt-5">
      <h2>{recipe.name_recipe}</h2>
      <p>{recipe.description}</p>
      <p><strong>Tipo:</strong> {recipe.tipo}</p>
      <p><strong>Precio:</strong> ${recipe.price}</p>
      <p><strong>Tiempo:</strong> {recipe.time} min</p>
      <div className="row">
        {recipe.imagenes?.map((img, i) => (
          <div key={i} className="col-md-4 mb-3">
            <img src={img} className="img-fluid rounded" alt={`Imagen ${i}`} />
          </div>
        ))}
      </div>
    </section>
  );
}