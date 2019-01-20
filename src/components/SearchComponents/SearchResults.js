import React from 'react';
import PropTypes from 'prop-types';
import SearchResultsTrue from './SearchResultsTrue';
import InitialResults from './InitialResults';

const SearchResult = ({ results, onSelect, toggleAccordion, isOpen, isEmpty }) => (
  <React.Fragment>
    {isEmpty ? 
    (
      <InitialResults 
        onSelect={onSelect} 
        toggleAccordion={toggleAccordion} 
        isOpen={isOpen}/>
    )
    : 
    (
      <SearchResultsTrue 
        results={results} 
        onSelect={onSelect} 
        toggleAccordion={toggleAccordion} 
        isOpen={isOpen} />
    )}
  </React.Fragment>
  )

SearchResult.propTypes = {
  results: PropTypes.array,
  onSelect: PropTypes.func,
  isEmpty: PropTypes.bool
}

export default SearchResult;
