import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

function HamburguerBtn({ isHambMenuOpen, setIsHambMenuOpen }) {
  // REF: https://codepen.io/diegotorres/pen/WxaxKo

  const onClickHambBtn = () => {
    setIsHambMenuOpen(!isHambMenuOpen);
  };

  return (
    <div className="hambBtnContainer">
      <div
        id="hambBtnFlipper"
        className={ `menu ${isHambMenuOpen ? 'active' : 'inactive'}` }
      >
        <button
          className="hambBtnOpened"
          type="button"
          onClick={ onClickHambBtn }
        >
          <AiOutlineMenu />
        </button>
        <button
          className="hambBtnClosed"
          type="button"
        >
          <AiOutlineClose />
        </button>
      </div>
    </div>
  );
}

HamburguerBtn.propTypes = {
  isHambMenuOpen: PropTypes.bool.isRequired,
  setIsHambMenuOpen: PropTypes.func.isRequired,
};

export default HamburguerBtn;
