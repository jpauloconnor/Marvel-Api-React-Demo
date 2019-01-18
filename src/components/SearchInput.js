import React from 'react'
import PropTypes from 'prop-types'

const SearchInput = ({ onChange }) => {

  function handleSearchInput({ target }) {
      onChange(target.value);
  }

  return (
    <div>
      <p>Enter a hero:</p>
     
      <input
        type="text"
        className="search-bar"
        onInput={handleSearchInput}
        placeholder="Enter a Character"
      />
    </div>
  )
}

SearchInput.propTypes = {
  onChange: PropTypes.func,
}

export default SearchInput;
