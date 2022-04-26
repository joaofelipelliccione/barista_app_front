/* Esse arquivo está com o es-lint desabilitado*/
import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import IntensityFilter from './IntensityFilter';
import RoastingFilter from './RoastingFilter';
import BitternessFilter from './BitternessFilter';
import AcidityFilter from './AcidityFilter';
import RobustnessFilter from './RobustnessFilter';
import '../../../styles/searchMethods/FiltersBar.css';

function FiltersBar({ setCapsulesToRender }) {
  const allCapsulesArr = useSelector((state) => state.capsules).allCapsules;
  const [isFilterActive, setIsFilterActive] = React.useState(false);

  const [intensityMathSignal, setIntensityMathSignal] = React.useState('?');
  const [chosenIntensity, setChosenIntensity] = React.useState(1);

  const [roastingMathSignal, setRoastingMathSignal] = React.useState('?');
  const [chosenRoasting, setChosenRoasting] = React.useState(1);

  const [bitternessMathSignal, setBitternessMathSignal] = React.useState('?');
  const [chosenBitterness, setChosenBitterness] = React.useState(1);

  const [acidityMathSignal, setAcidityMathSignal] = React.useState('?');
  const [chosenAcidity, setChosenAcidity] = React.useState(1);

  const [robustnessMathSignal, setRobustnessMathSignal] = React.useState('?');
  const [chosenRobustness, setChosenRobustness] = React.useState(1);

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

  const acidityFilterLogic = (capsulesToRenderArray) => {
    switch (acidityMathSignal) {
    case '≤':
      return capsulesToRenderArray
        .filter(({ capsuleAcidityLevel }) => capsuleAcidityLevel <= Number(chosenAcidity));
    case '=':
      return capsulesToRenderArray
        .filter(({ capsuleAcidityLevel }) => capsuleAcidityLevel === Number(chosenAcidity));
    case '≥':
      return capsulesToRenderArray
        .filter(({ capsuleAcidityLevel }) => capsuleAcidityLevel >= Number(chosenAcidity));
    default:
      return capsulesToRenderArray;
    }
  };

  const robustnessFilterLogic = (capsulesToRenderArray) => {
    switch (robustnessMathSignal) {
    case '≤':
      return capsulesToRenderArray
        .filter(({ capsuleRobustnessLevel }) => capsuleRobustnessLevel <= Number(chosenRobustness));
    case '=':
      return capsulesToRenderArray
        .filter(({ capsuleRobustnessLevel }) => capsuleRobustnessLevel === Number(chosenRobustness));
    case '≥':
      return capsulesToRenderArray
        .filter(({ capsuleRobustnessLevel }) => capsuleRobustnessLevel >= Number(chosenRobustness));
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
    if (acidityMathSignal !== '?') {
      capsulesToRenderArray = acidityFilterLogic(capsulesToRenderArray);
    }
    if (robustnessMathSignal !== '?') {
      capsulesToRenderArray = robustnessFilterLogic(capsulesToRenderArray);
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
    setAcidityMathSignal('?');
    setChosenAcidity(1);
    setRobustnessMathSignal('?');
    setChosenRobustness(1);
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
      <AcidityFilter
        acidityMathSignal={ acidityMathSignal }
        setAcidityMathSignal={ setAcidityMathSignal }
        acidityValue={ chosenAcidity }
        setAcidityValue={ setChosenAcidity }
      />
      <RobustnessFilter
        robustnessMathSignal={ robustnessMathSignal }
        setRobustnessMathSignal={ setRobustnessMathSignal }
        robustnessValue={ chosenRobustness }
        setRobustnessValue={ setChosenRobustness }
      />
      <button
        type="button"
        onClick={ isFilterActive ? onCleanFilter : onFilter }
        disabled={
          intensityMathSignal === '?'
          && roastingMathSignal === '?'
          && bitternessMathSignal === '?'
          && acidityMathSignal === '?'
          && robustnessMathSignal === '?'
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
