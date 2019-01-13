import React from 'react'
import PropTypes from 'prop-types'

// Again, we don't need stateful components.
const SearchInput = ({ onChange }) => {

  function handleSearchInput({ target }) {
      onChange(target.value)
    }

  return (
    <div>
      <p>Work in progress. For now, enter a name with a capital first letter(i.e, "Magneto or Hulk"). Give it a second. You can currently click on the results.</p>
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
