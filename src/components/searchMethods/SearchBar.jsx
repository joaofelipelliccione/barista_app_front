import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Select from 'react-select';
import { BsSearch } from 'react-icons/bs';
import '../../styles/searchMethods/SearchBar.css';

function SearchBar({ searchedCapsule, setSearchedCapsule,
  onClickSearchBtn, setCapsulesToRender }) {
  const allCapsulesArr = useSelector((state) => state.capsules).allCapsules;
  const allCapsulesNamesArr = allCapsulesArr.map(({ capsuleName }) => capsuleName);
  const reactSelectArr = allCapsulesNamesArr.map((opt) => ({ label: opt, value: opt }));

  return (
    <section className="searchBarContainer">
      <Select
        options={ reactSelectArr }
        placeholder="Volluto"
        onChange={ (opt) => setSearchedCapsule(opt.value) }
        onFocus={ () => {
          const inputFieldValue = document.querySelector('.css-qc6sy-singleValue');
          setCapsulesToRender(allCapsulesArr);
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
  searchedCapsule: PropTypes.string.isRequired,
  setSearchedCapsule: PropTypes.func.isRequired,
  onClickSearchBtn: PropTypes.func.isRequired,
  setCapsulesToRender: PropTypes.func.isRequired,
};

export default SearchBar;
