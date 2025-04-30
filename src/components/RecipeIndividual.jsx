export default function RecipeIndividual() {
    async function apiRecipe(id) {
        const url = `http://localhost:3000/api/recipes/${id}`;
        try {
          const respuesta = await fetch(url);
          if (!respuesta.ok) throw new Error(`Error: ${respuesta.status}`);
          const data = await respuesta.json();
          console.log("Receta específica:", data);
          localStorage.setItem("recipeSeleccionada", JSON.stringify(data));
        } catch (error) {
          console.error("Error al obtener receta:", error);
        }
      }

  return (
    <div>
      
    </div>
  )
}
