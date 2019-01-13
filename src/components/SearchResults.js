import React from 'react'
import PropTypes from 'prop-types'

const SearchResult = ({ results, onSelect }) => (
  <div>
    <ul>
      {results.map(res => (
        <li key={res.id} onClick={() => onSelect(res.id)}>
          {res.title}
        </li>
      ))}
    </ul>
  </div>
)

SearchResult.propTypes = {
  results: PropTypes.array,
  onSelect: PropTypes.func,
}

export default SearchResult;
