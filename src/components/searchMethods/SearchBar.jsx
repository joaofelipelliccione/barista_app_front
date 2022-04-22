import React from 'react';
import PropTypes from 'prop-types';
import { BsSearch } from 'react-icons/bs';
// import '../../styles/SearchBar.css';

function SearchBar({ searchedCapsule, setSearchedCapsule, onClickSearchBtn }) {
  const searchWithEnter = (e) => {
    e.preventDefault();
    onClickSearchBtn();
  };

  return (
    <section className="searchBarContainer">
      <input
        type="text"
        placeholder="Volluto"
        value={ searchedCapsule }
        onChange={ ({ target }) => setSearchedCapsule(target.value) }
        // onFocus={ () => {} }
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
