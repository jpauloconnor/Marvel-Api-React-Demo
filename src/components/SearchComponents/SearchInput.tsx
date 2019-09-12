import React from 'react'
import { 
  Input,
} from 'reactstrap'


const SearchInput = ({ placeholder, onChange }) => {

  function handleSearchInput({ target }) {
      onChange(target.value)
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

export default SearchInput
