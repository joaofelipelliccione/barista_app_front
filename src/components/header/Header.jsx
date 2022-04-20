import React from 'react';
import { Link } from 'react-router-dom';
import baristappLogo from '../../images/baristapp-logo.png';
import '../../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="centeredHeader">
        <div className="logoContainer">
          <Link to="/">
            <img src={ baristappLogo } alt="Logo Baristapp" />
            <h1>baristapp</h1>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
