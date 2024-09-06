import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div  className='auth'>
      <h1>Registrarse</h1>
      <form>
        <input required type="text" placeholder='Nombre de usuario' />
        <input required type="email" placeholder='Correo electrónico' />
        <input required type="password" placeholder='Contraseña' />
        <button>Ingresar</button>
        <p>mensaje error prueba</p>
        <span>¿Tienes una cuenta?<Link to='/login'>Ingresar</Link></span>
      </form>
    </div>
  )
}

export default Register
