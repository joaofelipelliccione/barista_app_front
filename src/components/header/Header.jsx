import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import baristappLogo from '../../images/baristapp-logo.png';
import HamburguerBtn from './HamburguerBtn';
import HamburgerContent from './HamburgerContent';
import '../../styles/Header.css';

function Header({ isFetching }) {
  const [isHambMenuOpen, setIsHambMenuOpen] = React.useState(false);

  return (
    <header
      className="header"
      style={ { borderBottom: isHambMenuOpen && 'solid 1px wheat' } }
    >
      <div className="centeredHeader">
        <div className="logoContainer">
          {console.log(isFetching)}
          <Link to="/">
            { !isFetching ? (
              <img src={ baristappLogo } alt="Logo Baristapp" />
            ) : (<div className="loader" />) }
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

Header.propTypes = {
  isFetching: PropTypes.bool,
};

Header.defaultProps = {
  isFetching: false,
};

export default Header;
