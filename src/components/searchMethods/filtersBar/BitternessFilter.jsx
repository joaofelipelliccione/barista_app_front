import React from 'react';
import PropTypes from 'prop-types';
import '../../../styles/searchMethods/FiltersBar.css';

function BitternessFilter({ bitternessMathSignal, setBitternessMathSignal,
  bitternessValue, setBitternessValue }) {
  return (
    <div className="bitternessFilterContainer">
      <h3 className="filterTitle">Amargor</h3>
      <select
        className="mathSignalSelect"
        name="mathSignalSelect"
        value={ bitternessMathSignal }
        onChange={ ({ target }) => {
          setBitternessMathSignal(target.value);
        } }
      >
        <option>?</option>
        <option>≤</option>
        <option>=</option>
        <option>≥</option>
      </select>
      <input
        type="range"
        name="bitternessFilter"
        min="1"
        max="5"
        value={ Number(bitternessValue) }
        onChange={ ({ target }) => {
          setBitternessValue(Number(target.value));
        } }
      />
      <output>{ Number(bitternessValue) }</output>
    </div>
  );
}

BitternessFilter.propTypes = {
  bitternessMathSignal: PropTypes.string.isRequired,
  setBitternessMathSignal: PropTypes.func.isRequired,
  bitternessValue: PropTypes.number.isRequired,
  setBitternessValue: PropTypes.func.isRequired,
};

export default BitternessFilter;
