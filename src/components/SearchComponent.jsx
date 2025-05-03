import { useState, useEffect } from "react";

export default function searchComponent() {
    const [recipe, setRecipe] = useState([]);
      const [search, setSearch] = useState("");
    
      useEffect(() => {
        async function fetchData() {
          try {
            const response = await fetch("http://jsonplaceholder.typicode.com/users");
            const data = await response.json();
            setRecipe(data);
            console.log(data);
          } catch (error) {
            console.error("Error buscando receta:", error);
          }
        }
    
        fetchData();
      }, []);
    
      const filtered = recipe.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    
      return (
        <div>
          <h1>Búsqueda</h1>
          <input
            type="text"
            placeholder="Buscar por nombre"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <ul>
            {filtered.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </div>
      );
}

