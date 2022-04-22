import React from 'react';
import PropTypes from 'prop-types';
import Radios from './Radios';

function SearchMethods({ searchMethod, setSearchMethod }) {
  return (
    <div className="searchMethodContainer">
      <Radios
        setSearchMethod={ setSearchMethod }
      />
      SEARCHBAR
      {console.log(searchMethod)}
    </div>
  );
}

SearchMethods.propTypes = {
  searchMethod: PropTypes.string.isRequired,
  setSearchMethod: PropTypes.func.isRequired,
};

export default SearchMethods;
