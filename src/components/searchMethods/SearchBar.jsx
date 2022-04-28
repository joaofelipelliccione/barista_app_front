import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { BsSearch } from 'react-icons/bs';
import '../../styles/searchMethods/SearchBar.css';

function SearchBar({ capsulesArray, setIsFetching, setCapsulesToRender }) {
  const [searchedCapsule, setSearchedCapsule] = React.useState('');

  const allCapsulesNamesArr = capsulesArray.map(({ capsuleName }) => capsuleName);
  const reactSelectArr = allCapsulesNamesArr.map((opt) => ({ label: opt, value: opt }));

  const onClickSearchBtn = async () => {
    const SEARCH_ONE_CAPSULE_ENDPOINT = `https://barista-app-back.herokuapp.com/capsules/search?capsuleName=${searchedCapsule}`;

    setIsFetching(true);
    const res = await fetch(SEARCH_ONE_CAPSULE_ENDPOINT);
    const data = await res.json();

    setCapsulesToRender(data);
    setIsFetching(false);
  };

  return (
    <section className="searchBarContainer">
      <Select
        options={ reactSelectArr }
        placeholder="Volluto"
        onChange={ (opt) => setSearchedCapsule(opt.value) }
        onFocus={ () => {
          const inputFieldValue = document.querySelector('.css-qc6sy-singleValue');
          setCapsulesToRender(capsulesArray);
          setSearchedCapsule('');
          inputFieldValue.innerText = '';
        } }
      />
      <button
        className="searchBtn"
        type="button"
        disabled={ searchedCapsule === '' }
        onClick={ () => onClickSearchBtn() }
      >
        <BsSearch />
      </button>
    </section>
  );
}

SearchBar.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  capsulesArray: PropTypes.array.isRequired,

  setIsFetching: PropTypes.func.isRequired,
  setCapsulesToRender: PropTypes.func.isRequired,
};

export default SearchBar;
