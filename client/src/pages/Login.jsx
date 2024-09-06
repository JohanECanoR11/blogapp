import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div  className='auth'>
      <h1>Login</h1>
      <form>
        <input type="text" placeholder='Nombre de usuario' />
        <input type="password" placeholder='Contraseña' />
        <button>Ingresar</button>
        <p>mensaje error prueba</p>
        <span>¿No tienes una cuenta?<Link to='/register'>Registrarse</Link></span>
      </form>
    </div>
  )
}

export default Login
