import React from 'react';
import PropTypes from 'prop-types';
import Radios from './Radios';
import SearchBar from './SearchBar';
import FiltersBar from './filtersBar/FiltersBar';
import '../../styles/searchMethods/SearchMethods.css';

function SearchMethods({ capsulesArray, searchMethod, setSearchMethod,
  setIsFetching, setCapsulesToRender }) {
  return (
    <div className="searchMethodsContainer">
      <Radios
        capsulesArray={ capsulesArray }
        setSearchMethod={ setSearchMethod }
        setCapsulesToRender={ setCapsulesToRender }
      />
      { searchMethod === 'name' ? (
        <SearchBar
          capsulesArray={ capsulesArray }
          setIsFetching={ setIsFetching }
          setCapsulesToRender={ setCapsulesToRender }
        />
      ) : (
        <FiltersBar
          capsulesArray={ capsulesArray }
          setCapsulesToRender={ setCapsulesToRender }
        />
      ) }
    </div>
  );
}

SearchMethods.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  capsulesArray: PropTypes.array.isRequired,

  searchMethod: PropTypes.string.isRequired,
  setSearchMethod: PropTypes.func.isRequired,
  setIsFetching: PropTypes.func.isRequired,
  setCapsulesToRender: PropTypes.func.isRequired,
};

export default SearchMethods;
