import {useForm} from 'react-hook-form';
import { Link } from 'react-router-dom';


export default function Register() {

    const {register, formState:{ errors }, handleSubmit} = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div
          className="d-flex justify-content-center align-items-center min-vh-100"
          style={{
            backgroundImage:
              'url("https://th.bing.com/th/id/R.b1cb3ad4d6dad2d04bc3f7c8a37ef662?rik=nn0z5fx6Uvfpog&pid=ImgRaw&r=0")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backdropFilter: 'blur(100px)',
          }}
        >
          <div
            className="card p-4 shadow mx-auto"
            style={{
              marginTop: '30px',
              marginBottom: '30px',
              maxWidth: '1000px',
              width: '60%',
              backgroundColor: 'rgba(0, 0, 0, 0.85)',
              color: '#fff',
              borderRadius: '12px',
            }}
          >
            <h1 className="text-center mb-4" style={{ color: '#ff7f50' }}>
              Formulario de Registro
            </h1>
      
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col-md-6">
                  {/* Nombre */}
                  <div className="mb-3">
                    <h2 className="text-right text-light mb-2" style={{ fontSize: '1.2rem' }}>
                      Nombre
                    </h2>
                    <input
                      type="text"
                      style={{
                        backgroundColor: '#2e2e2e',
                        color: '#fff',
                        borderColor: '#ff7f50',
                        padding: '10px',
                        borderRadius: '8px',
                        width: '100%',
                        transition: 'border-color 0.3s ease',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        marginBottom: '15px',
                      }}
                      {...register('name', {
                        required: true,
                        maxLength: 20,
                      })}
                    />
                    {errors.name?.type === 'required' && (
                      <p className="text-danger">Este campo es requerido</p>
                    )}
                    {errors.name?.type === 'maxLength' && (
                      <p className="text-danger">El nombre no puede exceder los 20 caracteres</p>
                    )}
                  </div>
      
                  {/* Apellido */}
                  <div className="mb-3">
                    <h2 className="text-right text-light mb-2" style={{ fontSize: '1.2rem' }}>
                      Apellido
                    </h2>
                    <input
                      type="text"
                      style={{
                        backgroundColor: '#2e2e2e',
                        color: '#fff',
                        borderColor: '#ff7f50',
                        padding: '10px',
                        borderRadius: '8px',
                        width: '100%',
                        transition: 'border-color 0.3s ease',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        marginBottom: '15px',
                      }}
                      {...register('lastname')}
                    />
                  </div>
      
                  {/* Edad */}
                  <div className="mb-3">
                    <h2 className="text-right text-light mb-2" style={{ fontSize: '1.2rem' }}>
                      Edad
                    </h2>
                    <input
                      type="number"
                      style={{
                        backgroundColor: '#2e2e2e',
                        color: '#fff',
                        borderColor: '#ff7f50',
                        padding: '10px',
                        borderRadius: '8px',
                        width: '100%',
                        transition: 'border-color 0.3s ease',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        marginBottom: '15px',
                      }}
                      {...register('age')}
                    />
                  </div>
                </div>
      
                <div className="col-md-6">
                  {/* Género */}
                  <div className="mb-3">
                    <h2 className="text-right text-light mb-2" style={{ fontSize: '1.2rem' }}>
                      Género
                    </h2>
                    <select
                      style={{
                        backgroundColor: '#2e2e2e',
                        color: '#fff',
                        borderColor: '#ff7f50',
                        padding: '10px',
                        borderRadius: '8px',
                        width: '100%',
                        transition: 'border-color 0.3s ease',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        marginBottom: '15px',
                      }}
                      {...register('genre')}
                    >
                      <option value="M">Masculino</option>
                      <option value="F">Femenino</option>
                      <option value="NB">No binario</option>
                      <option value="NA">Prefiero no decirlo</option>
                    </select>
                  </div>
      
                  {/* Email */}
                  <div className="mb-3">
                    <h2 className="text-right text-light mb-2" style={{ fontSize: '1.2rem' }}>
                      Email
                    </h2>
                    <input
                      type="text"
                      style={{
                        backgroundColor: '#2e2e2e',
                        color: '#fff',
                        borderColor: '#ff7f50',
                        padding: '10px',
                        borderRadius: '8px',
                        width: '100%',
                        transition: 'border-color 0.3s ease',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        marginBottom: '15px',
                      }}
                      {...register('email', {
                        required: true,
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      })}
                    />
                    {errors.email?.type === 'required' && (
                      <p className="text-danger">Este campo es requerido</p>
                    )}
                    {errors.email?.type === 'pattern' && (
                      <p className="text-danger">El email no es válido</p>
                    )}
                  </div>
      
                  {/* Contraseña */}
                  <div className="mb-4">
                    <h2 className="text-right text-light mb-2" style={{ fontSize: '1.2rem' }}>
                      Contraseña
                    </h2>
                    <input
                      type="password"
                      style={{
                        backgroundColor: '#2e2e2e',
                        color: '#fff',
                        borderColor: '#ff7f50',
                        padding: '10px',
                        borderRadius: '8px',
                        width: '100%',
                        transition: 'border-color 0.3s ease',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        marginBottom: '20px',
                      }}
                      {...register('password')}
                    />
                  </div>
                </div>
              </div>
             
              
              <Link to="/Login">
                <button
                  type="submit"
                  className="btn w-100"
                  style={{
                    background: 'linear-gradient(to right, #ff7f50, #ff914d, #ffa94d)',
                    color: '#000',
                    fontWeight: 'bold',
                    border: 'none',
                    transition: '0.3s ease',
                    borderRadius: '8px',
                    padding: '12px',
                  }}
                  onMouseOver={(e) =>
                    (e.target.style.background =
                      'linear-gradient(to right, #ffa94d, #ff7f50)')
                  }
                  onMouseOut={(e) =>
                    (e.target.style.background =
                      'linear-gradient(to right, #ff7f50, #ff914d, #ffa94d)')
                  }
                >
                  Registrarse
                </button>
              </Link>
            </form>
          </div>
        </div>
      )
      
}
