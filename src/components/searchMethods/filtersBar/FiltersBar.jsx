import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import IntensityFilter from './IntensityFilter';
import '../../../styles/searchMethods/FiltersBar.css';

function FiltersBar({ setCapsulesToRender }) {
  const allCapsulesArr = useSelector((state) => state.capsules).allCapsules;
  const [isFilterActive, setIsFilterActive] = React.useState(false);
  const [intensityMathSignal, setIntensityMathSignal] = React.useState('?');
  const [chosenIntensity, setChosenIntensity] = React.useState(1);

  const intensityFilterLogic = (capsulesToRenderArray) => {
    switch (intensityMathSignal) {
    case '≤':
      return capsulesToRenderArray
        .filter(({ capsuleIntensity }) => capsuleIntensity <= Number(chosenIntensity));
    case '=':
      return capsulesToRenderArray
        .filter(({ capsuleIntensity }) => capsuleIntensity === Number(chosenIntensity));
    case '≥':
      return capsulesToRenderArray
        .filter(({ capsuleIntensity }) => capsuleIntensity >= Number(chosenIntensity));
    default:
      return capsulesToRenderArray;
    }
  };

  const onFilter = () => {
    let capsulesToRenderArray = allCapsulesArr;

    if (intensityMathSignal !== '?') {
      capsulesToRenderArray = intensityFilterLogic(capsulesToRenderArray);
    }

    setCapsulesToRender(capsulesToRenderArray);
    setIsFilterActive(true);
  };

  const onCleanFilter = () => {
    setCapsulesToRender(allCapsulesArr);
    setIntensityMathSignal('?');
    setChosenIntensity(1);
    setIsFilterActive(false);
  };

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
      <button
        type="button"
        onClick={ isFilterActive ? onCleanFilter : onFilter }
        disabled={
          intensityMathSignal === '?'
        }
      >
        { isFilterActive ? 'Limpar' : 'Filtrar'}
      </button>
    </section>
  );
}

FiltersBar.propTypes = {
  setCapsulesToRender: PropTypes.func.isRequired,
};

export default FiltersBar;
