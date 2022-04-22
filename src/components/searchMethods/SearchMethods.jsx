import React from 'react';
import PropTypes from 'prop-types';
import Radios from './Radios';
import SearchBar from './SearchBar';

function SearchMethods({ searchMethod, setSearchMethod,
  searchedCapsule, setSearchedCapsule, onClickSearchBtn }) {
  return (
    <div className="searchMethodContainer">
      <Radios
        setSearchMethod={ setSearchMethod }
      />
      { searchMethod === 'name' ? (
        <SearchBar
          searchedCapsule={ searchedCapsule }
          setSearchedCapsule={ setSearchedCapsule }
          onClickSearchBtn={ onClickSearchBtn }
        />
      ) : (
        <p>FILTROS</p>
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
};

export default SearchMethods;
