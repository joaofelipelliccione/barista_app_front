import React from 'react';
// import PropTypes from 'prop-types';
import IntensityFilter from './IntensityFilter';
import '../../../styles/searchMethods/FiltersBar.css';

function FiltersBar() {
  const [intensityMathSignal, setIntensityMathSignal] = React.useState('?');
  const [chosenIntensity, setChosenIntensity] = React.useState(1);

  return (
    <section className="filtersBarContainer">
      <IntensityFilter
        intensityMathSignal={ intensityMathSignal }
        setIntensityMathSignal={ setIntensityMathSignal }
        intensityValue={ chosenIntensity }
        setIntensityValue={ setChosenIntensity }
      />
      <p>Filtro 2</p>
      <p>Filtro 3</p>
      <p>Filtro 4</p>
      <p>Filtro 5</p>
    </section>
  );
}

// FiltersBar.propTypes = {
//   setSearchMethod: PropTypes.func.isRequired,
// };

export default FiltersBar;
