import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div
      className="d-flex justify-content-center align-items-center min-vh-100"
      style={{
        backgroundImage: 'url("https://th.bing.com/th/id/R.b1cb3ad4d6dad2d04bc3f7c8a37ef662?rik=nn0z5fx6Uvfpog&pid=ImgRaw&r=0")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backdropFilter: 'blur(100px)',
      }}
    >
      <div
        className="card p-4 shadow"
        style={{
          maxWidth: '400px',
          width: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
          color: '#fff',
          borderRadius: '12px',
        }}
      >
        <h1 className="text-center mb-1" style={{ color: '#ff7f50' }}>
          ¡Bienvenido!
        </h1>
        <h2 className="text-center text-light mb-4" style={{ fontSize: '1.2rem' }}>
          Inicia sesión
        </h2>

        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label text-white">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="correo@ejemplo.com"
              style={{
                backgroundColor: '#2e2e2e',
                color: '#fff',
                borderColor: '#ff7f50',
              }}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label text-white">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="********"
              style={{
                backgroundColor: '#2e2e2e',
                color: '#fff',
                borderColor: '#ff7f50',
              }}
              required
            />
          </div>

          <button
            type="submit"
            className="btn w-100"
            style={{
              background: 'linear-gradient(to right, #ff7f50, #ff914d, #ffa94d)',
              color: '#000',
              fontWeight: 'bold',
              border: 'none',
              transition: '0.3s ease',
            }}
            onMouseOver={(e) =>
              (e.target.style.background = 'linear-gradient(to right, #ffa94d, #ff7f50)')
            }
            onMouseOut={(e) =>
              (e.target.style.background = 'linear-gradient(to right, #ff7f50, #ff914d, #ffa94d)')
            }
          >
            Iniciar sesión
          </button>
        </form>

        <p className="text-center mt-3 text-white">
          ¿No tienes cuenta?{' '}
          <Link to="/Register" className="text-decoration-none" style={{ color: '#ff914d' }}>
            Regístrate
          </Link>
        </p>
      </div>
    </div>
  );
}
