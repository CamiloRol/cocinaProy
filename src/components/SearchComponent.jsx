
import {useState, useEffect} from "react";
export default function SearchComponent() {
    let [recetas, setRecetas] = useState([]);

     //Traer las recetas desde la base de datos
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("http://localhost:3000/api/recipes/buscar?termino="); // Poner nuestra base de datos real
                const data = await response.json();
                setRecetas(data);
            } catch (error) {
                console.error("Error buscando receta:", error);
            }
            }

            fetchData();
        }, []);

  return (
    <>
        <li className="nav-item">
              <form
                onSubmit = {(e) => {
                  e.preventDefault();
                  let receta = setRecetas(e.target.search.value);
                  console.log("Buscando receta:", receta);
                  console.log("Recetas:", recetas);
                }}
              >
                <input type="text" autoComplete="off" name="search"/>
                <button>🔍</button>
              </form>
              
            </li>
    </>
  )
}
