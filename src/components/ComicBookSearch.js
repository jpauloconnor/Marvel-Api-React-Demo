import React from 'react'
import PropTypes from 'prop-types'
import SearchInput from './SearchInput'
import SearchResults from './SearchResults'

const ComicBookSearch = ({ results, onSearch, onSelect, placeholder }) => {
  return (
    <div>
      <SearchInput placeholder={placeholder} onChange={onSearch} />
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
