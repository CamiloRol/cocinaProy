import React from 'react'
import { Link } from 'react-router-dom';
import { useForm} from 'react-hook-form';

export default function Login() {
  return (
    <>
        <h1>Bienvenido</h1>
        <h2>Inicia sesión</h2>
        <form className="form" action="">
            <label>Email</label>
            <input type="email" name="email" id="email"/>
            <label>Contraseña</label>
            <input type="password" name="password"/>
            <button type="submit">Iniciar sesión</button>
        </form>
        <p>¿No tienes cuenta? </p>
        <Link to="/Register">Registrate</Link>

    
    </>
  )
}
