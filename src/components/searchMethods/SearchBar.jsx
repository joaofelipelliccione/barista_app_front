import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Select from 'react-select';
import { BsSearch } from 'react-icons/bs';
import '../../styles/searchMethods/SearchBar.css';

function SearchBar({ capsulesArray, setIsFetching, setCapsulesToRender }) {
  const [searchedCapsule, setSearchedCapsule] = React.useState('');

  const allCapsulesNamesArr = capsulesArray.map(({ capsuleName }) => capsuleName);
  const reactSelectArr = allCapsulesNamesArr.map((opt) => ({ label: opt, value: opt }));

  const location = useLocation();
  const currentPath = location.pathname;

  const onClickSearchBtn = async () => {
    const SEARCH_ONE_CAPSULE_FROM_ALL_ENDPOINT = `https://barista-app-back.herokuapp.com/capsules/search?capsuleType=All&capsuleName=${searchedCapsule}`;
    const SEARCH_ONE_CAPSULE_FROM_ORIGINAL_ENDPOINT = `https://barista-app-back.herokuapp.com/capsules/search?capsuleType=Original&capsuleName=${searchedCapsule}`;
    const SEARCH_ONE_CAPSULE_FROM_VERTUO_ENDPOINT = `https://barista-app-back.herokuapp.com/capsules/search?capsuleType=Vertuo&capsuleName=${searchedCapsule}`;

    let data;
    setIsFetching(true);

    if (currentPath === '/') {
      const res = await fetch(SEARCH_ONE_CAPSULE_FROM_ALL_ENDPOINT);
      data = await res.json();
    }
    if (currentPath === '/capsules/original') {
      const res = await fetch(SEARCH_ONE_CAPSULE_FROM_ORIGINAL_ENDPOINT);
      data = await res.json();
    }
    if (currentPath === '/capsules/vertuo') {
      const res = await fetch(SEARCH_ONE_CAPSULE_FROM_VERTUO_ENDPOINT);
      data = await res.json();
    }

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
