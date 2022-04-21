import React from 'react';
import { Link } from 'react-router-dom';
import baristappLogo from '../../images/baristapp-logo.png';
import HamburguerBtn from './HamburguerBtn';
import HamburgerContent from './HamburgerContent';
import '../../styles/Header.css';

function Header() {
  const [isHambMenuOpen, setIsHambMenuOpen] = React.useState(false);

  return (
    <header className="header">
      <div className="centeredHeader">
        <div className="logoContainer">
          <Link to="/">
            <img src={ baristappLogo } alt="Logo Baristapp" />
            <h1>baristapp</h1>
          </Link>
        </div>
        <HamburguerBtn
          isHambMenuOpen={ isHambMenuOpen }
          setIsHambMenuOpen={ setIsHambMenuOpen }
        />
      </div>
      {isHambMenuOpen && (
        <HamburgerContent
          isHambMenuOpen={ isHambMenuOpen }
          setIsHambMenuOpen={ setIsHambMenuOpen }
        />)}
    </header>
  );
}

export default Header;
