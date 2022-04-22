import React from 'react';
import PropTypes from 'prop-types';

function Radios({ setSearchMethod }) {
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
          onClick={ ({ target }) => setSearchMethod(target.value) }
          checked
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
          onClick={ ({ target }) => setSearchMethod(target.value) }
        />
        ...por filtros
      </label>
    </section>
  );
}

Radios.propTypes = {
  setSearchMethod: PropTypes.func.isRequired,
};

export default Radios;
