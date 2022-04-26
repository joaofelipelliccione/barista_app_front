import React from 'react';
import PropTypes from 'prop-types';
import '../../../styles/searchMethods/FiltersBar.css';

function RoastingFilter({ roastingMathSignal, setRoastingMathSignal,
  roastingValue, setRoastingValue }) {
  return (
    <div className="roastingFilterContainer">
      <h3 className="filterTitle">Torra</h3>
      <select
        className="mathSignalSelect"
        name="mathSignalSelect"
        value={ roastingMathSignal }
        onChange={ ({ target }) => {
          setRoastingMathSignal(target.value);
        } }
      >
        <option>?</option>
        <option>≤</option>
        <option>=</option>
        <option>≥</option>
      </select>
      <input
        type="range"
        name="roastingFilter"
        min="1"
        max="5"
        value={ Number(roastingValue) }
        onChange={ ({ target }) => {
          setRoastingValue(Number(target.value));
        } }
      />
      <output>{ Number(roastingValue) }</output>
    </div>
  );
}

RoastingFilter.propTypes = {
  roastingMathSignal: PropTypes.string.isRequired,
  setRoastingMathSignal: PropTypes.func.isRequired,
  roastingValue: PropTypes.number.isRequired,
  setRoastingValue: PropTypes.func.isRequired,
};

export default RoastingFilter;
