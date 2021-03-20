import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderArea } from './styled';

import { isLogged, doLogout } from '../../../helpers/AuthHandler'

const Header = () => {
  let logged = isLogged()

  const handleLogout = () => {
    doLogout()
    window.location.href = '/'
  }

  return (
    <HeaderArea>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <span className="logo1">O</span>
            <span className="logo2">L</span>
            <span className="logo3">X</span>
          </Link>
        </div>
        <nav className="navigation">
          <ul className="links">
            {logged && 
              <>
                <li className="link">
                  <Link to="/my-account">Minha Conta</Link>
                </li>
                <li className="link">
                  <button onClick={handleLogout}>Sair</button>
                </li>
                <li className="link link--button">
                  <Link to="/post-an-ad">Poste um anúncio</Link>
                </li>
              </>
            }
            {!logged &&
              <>
                <li className="link">
                  <Link to="/signin">Login</Link>
                </li>
                <li className="link">
                  <Link to="/signup">Cadastrar</Link>
                </li>
                <li className="link link--button">
                  <Link to="/signin">Poste um anúncio</Link>
                </li>
              </>
            }
          </ul>
        </nav>
      </div>
    </HeaderArea>
  );
}

export default Header;