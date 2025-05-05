import {useForm} from 'react-hook-form';
import { Link } from 'react-router-dom';

export default function Register() {

    const {register, formState:{ errors }, handleSubmit} = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

  return (
    <>
        <h2>Formulario de Registro</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Nombre</label>
                <input type="text" {...register('name', {
                    required: true,
                    maxLength: 20,
                })}/>

                {errors.name?.type === 'required' && <p>Este campo es requerido</p>}
                {errors.name?.type === 'maxLength' && <p>El nombre no puede exceder los 20 caracteres</p>}

            </div>
            <div>
                <label>Apellido</label>
                <input type="text" {...register('lastname')} />
            </div>
            <div>
                <label>Edad</label>
                <input type="number" {...register('age')}  />
            </div>
            <div>
                <label>Género</label>
                <select {...register('genre')} >
                    <option value="M">Masculino</option>
                    <option value="F">Femenino</option>
                    <option value="NB">No binario</option>
                    <option value="NA">Prefiero no decirlo</option>
                </select>
            </div>
            <div>
                <label>Email</label>
                <input type="text" {...register('email', {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })} />

                {errors.email?.type === 'required' && <p>Este campo es requerido</p>}
                {errors.email?.type === 'pattern' && <p>El email no es válido</p>}
            </div>
            <div>
                <label>Contraseña</label>
                <input type="password" {...register('password')} />
            </div>
            <input type="submit" value="Enviar"/>
        </form>
        <p>¿Ya tienes cuenta?</p>
        <Link to="/Login">Inicia sesión</Link>
    </>
  )
}
