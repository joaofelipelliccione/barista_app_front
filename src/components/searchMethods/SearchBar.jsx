import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Select from 'react-select';
import { BsSearch } from 'react-icons/bs';
import '../../styles/searchMethods/SearchBar.css';

function SearchBar({ searchedCapsule, setSearchedCapsule, onClickSearchBtn }) {
  const allCapsulesArr = useSelector((state) => state.capsules).allCapsules
    .map(({ capsuleName }) => capsuleName);
  const reactSelectArr = allCapsulesArr.map((opt) => ({ label: opt, value: opt }));

  const searchWithEnter = (e) => {
    e.preventDefault();
    onClickSearchBtn();
  };

  return (
    <section className="searchBarContainer">
      <Select
        options={ reactSelectArr }
        placeholder="Volluto"
        onChange={ (opt) => setSearchedCapsule(opt.value) }
        onKeyPress={ (event) => event.key === 'Enter'
        && searchWithEnter(event) }
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
};

export default SearchBar;
