import React from 'react';
import PropTypes from 'prop-types';
import Radios from './Radios';
import SearchBar from './SearchBar';
import FiltersBar from './filtersBar/FiltersBar';
import '../../styles/searchMethods/SearchMethods.css';

function SearchMethods({ searchMethod, setSearchMethod,
  searchedCapsule, setSearchedCapsule, onClickSearchBtn,
  setCapsulesToRender }) {
  return (
    <div className="searchMethodsContainer">
      <Radios
        setSearchMethod={ setSearchMethod }
      />
      { searchMethod === 'name' ? (
        <SearchBar
          searchedCapsule={ searchedCapsule }
          setSearchedCapsule={ setSearchedCapsule }
          onClickSearchBtn={ onClickSearchBtn }
          setCapsulesToRender={ setCapsulesToRender }
        />
      ) : (
        <FiltersBar />
      ) }
    </div>
  );
}

SearchMethods.propTypes = {
  searchMethod: PropTypes.string.isRequired,
  setSearchMethod: PropTypes.func.isRequired,
  searchedCapsule: PropTypes.string.isRequired,
  setSearchedCapsule: PropTypes.func.isRequired,
  onClickSearchBtn: PropTypes.func.isRequired,
  setCapsulesToRender: PropTypes.func.isRequired,
};

export default SearchMethods;
