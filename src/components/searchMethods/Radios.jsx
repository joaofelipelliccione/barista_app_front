import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

function Radios({ setSearchMethod, setCapsulesToRender }) {
  const allCapsulesArr = useSelector((state) => state.capsules).allCapsules;

  return (
    <section className="searchMethodsRdBtnsContainer">
      <label
        className="searchMethodsRdBtns"
        htmlFor="searchByNameInput"
      >
        <input
          id="searchByNameInput"
          name="searchMethodsRdBtns"
          type="radio"
          value="name"
          onClick={ ({ target }) => {
            setSearchMethod(target.value);
            setCapsulesToRender(allCapsulesArr);
          } }
          defaultChecked
        />
        ...por nome
      </label>
      <label
        className="searchMethodsRdBtns"
        htmlFor="searchByFiltersInput"
      >
        <input
          id="searchByFiltersInput"
          name="searchMethodsRdBtns"
          type="radio"
          value="filters"
          onClick={ ({ target }) => {
            setSearchMethod(target.value);
            setCapsulesToRender(allCapsulesArr);
          } }
        />
        ...por filtros
      </label>
    </section>
  );
}

Radios.propTypes = {
  setSearchMethod: PropTypes.func.isRequired,
  setCapsulesToRender: PropTypes.func.isRequired,
};

export default Radios;
