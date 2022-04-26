/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import IntensityFilter from './IntensityFilter';
import RoastingFilter from './RoastingFilter';
import '../../../styles/searchMethods/FiltersBar.css';
import BitternessFilter from './BitternessFilter';

function FiltersBar({ setCapsulesToRender }) {
  const allCapsulesArr = useSelector((state) => state.capsules).allCapsules;
  const [isFilterActive, setIsFilterActive] = React.useState(false);

  const [intensityMathSignal, setIntensityMathSignal] = React.useState('?');
  const [chosenIntensity, setChosenIntensity] = React.useState(1);

  const [roastingMathSignal, setRoastingMathSignal] = React.useState('?');
  const [chosenRoasting, setChosenRoasting] = React.useState(1);

  const [bitternessMathSignal, setBitternessMathSignal] = React.useState('?');
  const [chosenBitterness, setChosenBitterness] = React.useState(1);

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

  const roastingFilterLogic = (capsulesToRenderArray) => {
    switch (roastingMathSignal) {
    case '≤':
      return capsulesToRenderArray
        .filter(({ capsuleRoastingLevel }) => capsuleRoastingLevel <= Number(chosenRoasting));
    case '=':
      return capsulesToRenderArray
        .filter(({ capsuleRoastingLevel }) => capsuleRoastingLevel === Number(chosenRoasting));
    case '≥':
      return capsulesToRenderArray
        .filter(({ capsuleRoastingLevel }) => capsuleRoastingLevel >= Number(chosenRoasting));
    default:
      return capsulesToRenderArray;
    }
  };

  const bitternessFilterLogic = (capsulesToRenderArray) => {
    switch (bitternessMathSignal) {
    case '≤':
      return capsulesToRenderArray
        .filter(({ capsuleBitternessLevel }) => capsuleBitternessLevel <= Number(chosenBitterness));
    case '=':
      return capsulesToRenderArray
        .filter(({ capsuleBitternessLevel }) => capsuleBitternessLevel === Number(chosenBitterness));
    case '≥':
      return capsulesToRenderArray
        .filter(({ capsuleBitternessLevel }) => capsuleBitternessLevel >= Number(chosenBitterness));
    default:
      return capsulesToRenderArray;
    }
  };

  const onFilter = () => {
    let capsulesToRenderArray = allCapsulesArr;

    if (intensityMathSignal !== '?') {
      capsulesToRenderArray = intensityFilterLogic(capsulesToRenderArray);
    }
    if (roastingMathSignal !== '?') {
      capsulesToRenderArray = roastingFilterLogic(capsulesToRenderArray);
    }
    if (bitternessMathSignal !== '?') {
      capsulesToRenderArray = bitternessFilterLogic(capsulesToRenderArray);
    }

    setCapsulesToRender(capsulesToRenderArray);
    setIsFilterActive(true);
  };

  const onCleanFilter = () => {
    setCapsulesToRender(allCapsulesArr);
    setIntensityMathSignal('?');
    setChosenIntensity(1);
    setRoastingMathSignal('?');
    setChosenRoasting(1);
    setBitternessMathSignal('?');
    setChosenBitterness(1);
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
      <RoastingFilter
        roastingMathSignal={ roastingMathSignal }
        setRoastingMathSignal={ setRoastingMathSignal }
        roastingValue={ chosenRoasting }
        setRoastingValue={ setChosenRoasting }
      />
      <BitternessFilter
        bitternessMathSignal={ bitternessMathSignal }
        setBitternessMathSignal={ setBitternessMathSignal }
        bitternessValue={ chosenBitterness }
        setBitternessValue={ setChosenBitterness }
      />
      <p>Filtro 3</p>
      <p>Filtro 4</p>
      <button
        type="button"
        onClick={ isFilterActive ? onCleanFilter : onFilter }
        disabled={
          intensityMathSignal === '?'
          && roastingMathSignal === '?'
          && bitternessMathSignal === '?'
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
