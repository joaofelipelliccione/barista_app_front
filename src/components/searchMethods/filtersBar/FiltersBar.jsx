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
import CupSizesFilter from './CupSizesFilter';
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

  const [ristretto, setRistretto] = React.useState(false);
  const [expresso, setExpresso] = React.useState(false);
  const [dblExpresso, setDblExpresso] = React.useState(false);
  const [lungo, setLungo] = React.useState(false);
  const [granLungo, setGranLungo] = React.useState(false);
  const [coffe, setCoffe] = React.useState(false);
  const [carafe, setCarafe] = React.useState(false);
  const [cappuccino, setCappuccino] = React.useState(false);
  const [dblCappuccino, setDblCappuccino] = React.useState(false);

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
    setRistretto(false);
    setExpresso(false);
    setDblExpresso(false);
    setLungo(false);
    setGranLungo(false);
    setCoffe(false);
    setCarafe(false);
    setCappuccino(false);
    setDblCappuccino(false);
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
      <CupSizesFilter
        ristretto={ ristretto }
        setRistretto={ setRistretto }
        expresso={ expresso }
        setExpresso={ setExpresso }
        dblExpresso={ dblExpresso }
        setDblExpresso={ setDblExpresso }
        lungo={ lungo }
        setLungo={ setLungo }
        granLungo={ granLungo }
        setGranLungo={ setGranLungo }
        coffe={ coffe }
        setCoffe={ setCoffe }
        carafe={ carafe }
        setCarafe={ setCarafe }
        cappuccino={ cappuccino }
        setCappuccino={ setCappuccino }
        dblCappuccino={ dblCappuccino }
        setDblCappuccino={ setDblCappuccino }
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
          && !ristretto
          && !expresso
          && !dblExpresso
          && !lungo
          && !granLungo
          && !coffe
          && !carafe
          && !cappuccino
          && !dblCappuccino
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
