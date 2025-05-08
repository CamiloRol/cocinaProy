import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';


export default function Loginbuttom() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  return (

    /* Israel no pudo ver como quedaron estos estilos pero se utilizan de los anteriores que estan abajo , revisar y confirmar  */
    <>
      {user ? (
        <>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            backgroundColor: '#fff',
            borderRadius: '20px',
            padding: '8px 16px',
            fontWeight: 'bold',
            color: '#000',
          }}
        >
          <p style={{ margin: 0 }}>Hola, {user.nombre} 👋</p>
          <button
            onClick={handleLogout}
            type="button"
            style={{
              backgroundColor: '#fff',
              border: 'none',
              color: '#000',
              borderRadius: '20px',
              padding: '6px 10px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#39ff14')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#fff')}
          >
            Cerrar sesión
          </button>
        </div>
      </>
      ) : (
        <>
        <div style={{ display: 'flex', gap: '6px' }}>
          <Link to="/login">
            <button
              type="button"
              style={{
                backgroundColor: '#fff',
                border: 'none',
                color: '#000',
                borderRadius: '20px',
                padding: '8px 12px',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = '#39ff14')}
              onMouseOut={(e) => (e.target.style.backgroundColor = '#fff')}
            >
              Login
            </button>
          </Link>
          <Link to="/Register">
            <button
              type="button"
              style={{
                backgroundColor: '#fff',
                border: 'none',
                color: '#000',
                borderRadius: '20px',
                padding: '8px 12px',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = '#39ff14')}
              onMouseOut={(e) => (e.target.style.backgroundColor = '#fff')}
            >
              Register
            </button>
          </Link>
        </div>
      </>
      )}
    </>
  );
}
