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
          <Link to="/">
            <img src={Logo} alt="logo_blogapp" />
          </Link>          
        </div>
        <div className="links">
          <Link className='link' to="/?cat=art">
            <h6>ARTE</h6>
          </Link>
          <Link className='link' to="/?cat=science">
            <h6>CIENCIA</h6>
          </Link>
          <Link className='link' to="/?cat=tecnology">
            <h6>TECNOLOGÍA</h6>
          </Link>
          <Link className='link' to="/?cat=cinema">
            <h6>CINE</h6>
          </Link>
          <Link className='link' to="/?cat=design">
            <h6>DISEÑO</h6>
          </Link>
          <Link className='link' to="/?cat=food">
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
