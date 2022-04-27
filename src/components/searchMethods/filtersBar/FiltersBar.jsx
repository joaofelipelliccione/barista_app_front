/* Esse arquivo está com o es-lint desabilitado */
import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { RiFilterLine, RiFilterOffLine } from 'react-icons/ri';
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

  const capsMainAttributesFilterLogic = (capsToRenderArray, attribute, mathSignal, chosenValue) => {
    switch (mathSignal) {
    case '≤':
      return capsToRenderArray
        .filter((capObj) => capObj[attribute] <= chosenValue);
    case '=':
      return capsToRenderArray
        .filter((capObj) => capObj[attribute] === chosenValue);
    case '≥':
      return capsToRenderArray
        .filter((capObj) => capObj[attribute] >= chosenValue);
    default:
      return capsToRenderArray;
    }
  };

  const onFilter = () => {
    let capsToRenderArr = allCapsulesArr;

    if (intensityMathSignal !== '?') {
      capsToRenderArr = capsMainAttributesFilterLogic(capsToRenderArr, 'capsuleIntensity', intensityMathSignal, chosenIntensity);
    }
    if (roastingMathSignal !== '?') {
      capsToRenderArr = capsMainAttributesFilterLogic(capsToRenderArr, 'capsuleRoastingLevel', roastingMathSignal, chosenRoasting);
    }
    if (bitternessMathSignal !== '?') {
      capsToRenderArr = capsMainAttributesFilterLogic(capsToRenderArr, 'capsuleBitternessLevel', bitternessMathSignal, chosenBitterness);
    }
    if (acidityMathSignal !== '?') {
      capsToRenderArr = capsMainAttributesFilterLogic(capsToRenderArr, 'capsuleAcidityLevel', acidityMathSignal, chosenAcidity);
    }
    if (robustnessMathSignal !== '?') {
      capsToRenderArr = capsMainAttributesFilterLogic(capsToRenderArr, 'capsuleRobustnessLevel', robustnessMathSignal, chosenRobustness);
    }

    setCapsulesToRender(capsToRenderArr);
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
        className={ isFilterActive ? 'clearFilterBtn' : 'filterBtn' }
        onClick={ isFilterActive ? onCleanFilter : onFilter }
        disabled={
          intensityMathSignal === '?'
          && roastingMathSignal === '?'
          && bitternessMathSignal === '?'
          && acidityMathSignal === '?'
          && robustnessMathSignal === '?'
        }
      >
        { isFilterActive ? <RiFilterOffLine /> : <RiFilterLine />}
      </button>
    </section>
  );
}

FiltersBar.propTypes = {
  setCapsulesToRender: PropTypes.func.isRequired,
};

export default FiltersBar;
