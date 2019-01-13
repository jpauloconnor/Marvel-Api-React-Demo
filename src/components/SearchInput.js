import React from 'react'
import PropTypes from 'prop-types'

// Again, we don't need stateful components.
const SearchInput = ({ onChange }) => {

  function handleSearchInput({ target }) {
      onChange(target.value)
    }

  return (
    <div>
      <input
        type="text"
        className="search-bar"
        onInput={handleSearchInput}
        placeholder="Search Marvel"
      />
    </div>
  )
}

SearchInput.propTypes = {
  onChange: PropTypes.func,
}

export default SearchInput;
