import React from 'react';
import PropTypes from 'prop-types';
import Radios from './Radios';
import SearchBar from './SearchBar';
import FiltersBar from './filtersBar/FiltersBar';
import '../../styles/searchMethods/SearchMethods.css';

function SearchMethods({ searchMethod, setSearchMethod,
  setIsFetching, setCapsulesToRender }) {
  return (
    <div className="searchMethodsContainer">
      <Radios
        setSearchMethod={ setSearchMethod }
      />
      { searchMethod === 'name' ? (
        <SearchBar
          setIsFetching={ setIsFetching }
          setCapsulesToRender={ setCapsulesToRender }
        />
      ) : (
        <FiltersBar
          setCapsulesToRender={ setCapsulesToRender }
        />
      ) }
    </div>
  );
}

SearchMethods.propTypes = {
  searchMethod: PropTypes.string.isRequired,
  setSearchMethod: PropTypes.func.isRequired,
  setIsFetching: PropTypes.func.isRequired,
  setCapsulesToRender: PropTypes.func.isRequired,
};

export default SearchMethods;
