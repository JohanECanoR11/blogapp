import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

  const [inputs, setInputs] = useState({
    username:"",
    password:"",
  })

  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = e => {
    setInputs(prev => ({...prev, [e.target.name]: e.target.value}))
  };

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await axios.post("/auth/login", inputs);
      navigate("/")
    }catch(err){
      setError(err.response.data);
    }
  };

  return (
    <div  className='auth'>
      <h1>Ingresar</h1>
      <form>
        <input required type="text" placeholder='Nombre de usuario' name="username" onChange={handleChange} />
        <input required type="password" placeholder='Contraseña' name='password' onChange={handleChange} />
        <button onClick={handleSubmit}>Ingresar</button>
        {err &&<p>{err}</p>}
        <span>¿No tienes una cuenta?<Link to='/register'>Registrarse</Link></span>
      </form>
    </div>
  )
}

export default Login
