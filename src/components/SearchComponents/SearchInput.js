import React from 'react'
import PropTypes from 'prop-types'
import { 
  Input,
} from 'reactstrap';

const SearchInput = ({ onChange }) => {

  function handleSearchInput({ target }) {
      onChange(target.value);
  }

  return (
    <React.Fragment>
      <br />
        <Input
          type="text"
          className="search-bar"
          onInput={handleSearchInput}
          placeholder="Enter a character name"
        />
      <br />
    </React.Fragment>
  )
}

SearchInput.propTypes = {
  onChange: PropTypes.func,
}

export default SearchInput;
