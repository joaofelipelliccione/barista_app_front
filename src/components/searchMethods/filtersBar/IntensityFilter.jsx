import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import '../../../styles/searchMethods/FiltersBar.css';

function IntensityFilter({ intensityMathSignal, setIntensityMathSignal,
  intensityValue, setIntensityValue }) {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="intensityFilterContainer">
      <h3 className="filterTitle">Intensidade</h3>
      <select
        className="mathSignalSelect"
        name="mathSignalSelect"
        value={ intensityMathSignal }
        onChange={ ({ target }) => {
          setIntensityMathSignal(target.value);
        } }
      >
        <option>?</option>
        <option>≤</option>
        <option>=</option>
        <option>≥</option>
      </select>
      <input
        type="range"
        name="intensityFilter"
        min="1"
        max={ currentPath === '/capsules/vertuo' ? '11' : '13' }
        value={ Number(intensityValue) }
        onChange={ ({ target }) => {
          setIntensityValue(Number(target.value));
        } }
      />
      <output>{ Number(intensityValue) }</output>
    </div>
  );
}

IntensityFilter.propTypes = {
  intensityMathSignal: PropTypes.string.isRequired,
  setIntensityMathSignal: PropTypes.func.isRequired,
  intensityValue: PropTypes.number.isRequired,
  setIntensityValue: PropTypes.func.isRequired,
};

export default IntensityFilter;
