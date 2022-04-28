import React from 'react';
import PropTypes from 'prop-types';

function Radios({ capsulesArray, setSearchMethod, setCapsulesToRender }) {
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
            setCapsulesToRender(capsulesArray);
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
            setCapsulesToRender(capsulesArray);
          } }
        />
        ...por filtros
      </label>
    </section>
  );
}

Radios.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  capsulesArray: PropTypes.array.isRequired,

  setSearchMethod: PropTypes.func.isRequired,
  setCapsulesToRender: PropTypes.func.isRequired,
};

export default Radios;
