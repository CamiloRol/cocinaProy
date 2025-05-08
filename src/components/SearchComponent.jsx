import {useState} from "react";
import { useNavigate } from "react-router-dom";

export default function SearchComponent() {
    const [termino, setTermino] = useState("");
    const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!termino.trim()) return;
    navigate(`/Busqueda?termino=${encodeURIComponent(termino)}`);
  };

  return (
    <>
    <li className="nav-item">
      <form
        onSubmit={
          handleSubmit}
        className="d-flex align-items-center"
      >
        <input
          type="text"
          autoComplete="off"
          name="search"
          value={termino}
          onChange={(e) => setTermino(e.target.value)}
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
