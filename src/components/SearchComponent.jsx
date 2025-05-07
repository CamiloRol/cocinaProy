
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
        onSubmit={(e) => {
          e.preventDefault();
          let receta = setRecetas(e.target.search.value);
          console.log("Buscando receta:", receta);
          console.log("Recetas:", recetas);
        }}
        className="d-flex align-items-center"
      >
        <input
          type="text"
          autoComplete="off"
          name="search"
          placeholder="Buscar receta..."
          style={{
            backgroundColor: '#ffff',
            color: '#666',
            border: '1px solid #ff7f50',
            borderRadius: '20px 0 0 20px',
            padding: '8px 50px',
            outline: 'none',
            width: '180px',
            transition: '0.3s ease',
            marginLeft:'200px'
          }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: '#ff7f50',
            border: 'none',
            color: '#000',
            borderRadius: '0 20px 20px 0',
            padding: '8px 12px',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#ffa94d')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#ff7f50')}
        >
          🔍
        </button>
      </form>
    </li>
  </>
  )
}
