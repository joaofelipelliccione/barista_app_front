import React from 'react';
import PropTypes from 'prop-types';
import '../../../styles/searchMethods/FiltersBar.css';

function AcidityFilter({ acidityMathSignal, setAcidityMathSignal,
  acidityValue, setAcidityValue }) {
  return (
    <div className="acidityFilterContainer">
      <h3 className="filterTitle">Acidez</h3>
      <select
        className="mathSignalSelect"
        name="mathSignalSelect"
        value={ acidityMathSignal }
        onChange={ ({ target }) => {
          setAcidityMathSignal(target.value);
        } }
      >
        <option>?</option>
        <option>≤</option>
        <option>=</option>
        <option>≥</option>
      </select>
      <input
        type="range"
        name="acidityFilter"
        min="1"
        max="5"
        value={ Number(acidityValue) }
        onChange={ ({ target }) => {
          setAcidityValue(Number(target.value));
        } }
      />
      <output>{ Number(acidityValue) }</output>
    </div>
  );
}

AcidityFilter.propTypes = {
  acidityMathSignal: PropTypes.string.isRequired,
  setAcidityMathSignal: PropTypes.func.isRequired,
  acidityValue: PropTypes.number.isRequired,
  setAcidityValue: PropTypes.func.isRequired,
};

export default AcidityFilter;
