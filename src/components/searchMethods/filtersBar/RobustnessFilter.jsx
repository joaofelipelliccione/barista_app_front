import React from 'react';
import PropTypes from 'prop-types';
import '../../../styles/searchMethods/FiltersBar.css';

function RobustnessFilter({ robustnessMathSignal, setRobustnessMathSignal,
  robustnessValue, setRobustnessValue }) {
  return (
    <div className="robustnessFilterContainer">
      <h3 className="filterTitle">Corpo</h3>
      <select
        className="mathSignalSelect"
        name="mathSignalSelect"
        value={ robustnessMathSignal }
        onChange={ ({ target }) => {
          setRobustnessMathSignal(target.value);
        } }
      >
        <option>?</option>
        <option>≤</option>
        <option>=</option>
        <option>≥</option>
      </select>
      <input
        type="range"
        name="robustnessFilter"
        min="1"
        max="5"
        value={ Number(robustnessValue) }
        onChange={ ({ target }) => {
          setRobustnessValue(Number(target.value));
        } }
      />
      <output>{ Number(robustnessValue) }</output>
    </div>
  );
}

RobustnessFilter.propTypes = {
  robustnessMathSignal: PropTypes.string.isRequired,
  setRobustnessMathSignal: PropTypes.func.isRequired,
  robustnessValue: PropTypes.number.isRequired,
  setRobustnessValue: PropTypes.func.isRequired,
};

export default RobustnessFilter;
