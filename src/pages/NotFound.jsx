import { Link } from "react-router-dom";

export default function NotFound() {
  const styles = {
    container: {
      backgroundColor: '#000',
      color: '#fff',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '20px',
    },
    title: {
      color:  '#ff6633',
      fontSize: '48px',
      fontWeight: 'bold',
      marginBottom: '16px',
    },
    message: {
      fontSize: '18px',
      marginBottom: '24px',
    },
    button: {
      backgroundColor: ' #ff6633',
      color: '#fff',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      textDecoration: 'none',
      fontWeight: 'bold',
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Error 404</h2>
      <p style={styles.message}>Página no encontrada.</p>
      <Link to="/" style={styles.button}>
        Regresar a Home
      </Link>
    </div>
  );
}
