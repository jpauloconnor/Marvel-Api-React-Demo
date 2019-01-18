import React from 'react';
import PropTypes from 'prop-types';
import SearchInput from './SearchInput';
import SearchResults from './SearchResults';
import _ from 'lodash';

const ComicBookSearch = ({ results, onSearch, onSelect, placeholder  }) => {
  return (
    <div>
      <h1>Search the Marvel API</h1>
      <SearchInput placeholder={placeholder} onChange={_.debounce(onSearch, 1500)} />
      <SearchResults results={results} onSelect={onSelect} />
    </div>
  )
}

ComicBookSearch.propTypes = {
  onSearch: PropTypes.func,
  onSelect: PropTypes.func,
  results: PropTypes.array,
  placeholder: PropTypes.string,
}

export default ComicBookSearch;