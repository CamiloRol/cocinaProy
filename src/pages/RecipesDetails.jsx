import { useParams } from "react-router-dom";

export default function RecipesDetails() {
  let { id } = useParams();
  console.log("id:", id); // Verifica en la conso // Desestructurando el id de la URL


  return (
    <div>
      <h1>Detalle de la receta</h1>
      <h1>Receta {id}</h1>
    </div>
  )
}
