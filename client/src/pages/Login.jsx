import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div  className='auth'>
      <h1>Ingresar</h1>
      <form>
        <input required type="text" placeholder='Nombre de usuario' />
        <input required type="password" placeholder='Contraseña' />
        <button>Ingresar</button>
        <p>mensaje error prueba</p>
        <span>¿No tienes una cuenta?<Link to='/register'>Registrarse</Link></span>
      </form>
    </div>
  )
}

export default Login
