import React from 'react';
import PropTypes from 'prop-types';
import '../../../styles/searchMethods/FiltersBar.css';

import ristrettoImg from '../../../images/cupSizes/img-ristretto25.svg';
import expressoImg from '../../../images/cupSizes/img-expresso40.svg';
import dblExpressoImg from '../../../images/cupSizes/img-dbl_expresso80.svg';
import lungoImg from '../../../images/cupSizes/img-lungo110.svg';
import granLungoImg from '../../../images/cupSizes/img-gran_lungo150.svg';
import coffeImg from '../../../images/cupSizes/img-coffe230.svg';
import carafeImg from '../../../images/cupSizes/img-carafe535.svg';
import cappuccinoImg from '../../../images/cupSizes/img-cappuccino.svg';
import dblCappuccinoImg from '../../../images/cupSizes/img-dbl_cappuccino.svg';

function CupSizesFilter({ ristretto, setRistretto, expresso, setExpresso,
  dblExpresso, setDblExpresso, lungo, setLungo, granLungo, setGranLungo,
  coffe, setCoffe, carafe, setCarafe, cappuccino, setCappuccino, 
  dblCappuccino, setDblCappuccino }) {
  const cupSizesArray = [
    { id: 1, state: ristretto, setState: setRistretto, imgPath: ristrettoImg, ml: 25 },
    { id: 2, state: expresso, setState: setExpresso, imgPath: expressoImg, ml: 40 },
    { id: 3, state: dblExpresso, setState: setDblExpresso, imgPath: dblExpressoImg, ml: 80 },
    { id: 4, state: lungo, setState: setLungo, imgPath: lungoImg, ml: 110 },
    { id: 5, state: granLungo, setState: setGranLungo, imgPath: granLungoImg, ml: 150 },
    { id: 6, state: coffe, setState: setCoffe, imgPath: coffeImg, ml: 230 },
    { id: 7, state: carafe, setState: setCarafe, imgPath: carafeImg, ml: 535 },
    { id: 8, state: cappuccino, setState: setCappuccino, imgPath: cappuccinoImg, ml: 180 },
    { id: 9, state: dblCappuccino, setState: setDblCappuccino, imgPath: dblCappuccinoImg, ml: 360 },
  ];

  return (
    <div className="cupsSizesFilterContainer">
      <div className='cupsSizesFilterScrollWrapper'>
        { cupSizesArray.map(({ id, state, setState, imgPath, ml }) => (
          <button
            className={ state ? "cupSizeFilterActive" : "cupSizeFilterInactive" }
            key={ id }
            onClick={ () => setState(!state) }  
          >
            <img 
              src={ imgPath }
              alt={ `Imagem da xícara ${id}` }
              width="22"
              height="22"
            />
            <span className="filterCupSizes">{ `${ml} ml` }</span>
          </button>
        )) }
      </div>
    </div>
  );
}

CupSizesFilter.propTypes = {
  ristretto: PropTypes.bool.isRequired,
  setRistretto: PropTypes.func.isRequired,
  expresso: PropTypes.bool.isRequired,
  setExpresso: PropTypes.func.isRequired,
  dblExpresso: PropTypes.bool.isRequired,
  setDblExpresso: PropTypes.func.isRequired,
  lungo: PropTypes.bool.isRequired,
  setLungo: PropTypes.func.isRequired,
  granLungo: PropTypes.bool.isRequired,
  setGranLungo: PropTypes.func.isRequired,
  coffe: PropTypes.bool.isRequired,
  setCoffe: PropTypes.func.isRequired,
  carafe: PropTypes.bool.isRequired,
  setCarafe: PropTypes.func.isRequired,
  cappuccino: PropTypes.bool.isRequired,
  setCappuccino: PropTypes.func.isRequired,
  dblCappuccino: PropTypes.bool.isRequired,
  setDblCappuccino: PropTypes.func.isRequired,
};

export default CupSizesFilter;
