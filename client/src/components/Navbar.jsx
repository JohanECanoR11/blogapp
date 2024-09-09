import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/BLOGAPP.png';
import { AuthContext } from '../context/authContext';

const Navbar = () => {

  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="logo_blogapp" />
        </div>
        <div className="links">
          <Link className='link' to="/?cat=art">
            <h6>ARTE</h6>
          </Link>
          <Link className='link' to="/?cat=art">
            <h6>CIENCIA</h6>
          </Link>
          <Link className='link' to="/?cat=art">
            <h6>TECNOLOGÍA</h6>
          </Link>
          <Link className='link' to="/?cat=art">
            <h6>CINE</h6>
          </Link>
          <Link className='link' to="/?cat=art">
            <h6>DISEÑO</h6>
          </Link>
          <Link className='link' to="/?cat=art">
            <h6>COMIDA</h6>
          </Link>
          <span>{currentUser?.username}</span>
          {currentUser ? <span onClick={logout}>Cerrar <br /> Sesión</span> : <Link className='link' to="/login">Ingresar</Link>}
          <span className='write'>
            <Link className='link' to="/write">Publicar</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar
