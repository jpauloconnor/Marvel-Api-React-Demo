import React from 'react'
import PropTypes from 'prop-types'
import { 
  Input,
  InputGroup,
  InputGroupAddon, 
  Button
} from 'reactstrap';

const SearchInput = ({ onChange }) => {

  function handleSearchInput({ target }) {
      onChange(target.value);
  }

  return (
    <div>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <Button type="button" color="primary"><i className="fa fa-search"></i>Who do you want to find?</Button>
        </InputGroupAddon>
        <Input
          type="text"
          className="search-bar"
          onInput={handleSearchInput}
          placeholder="Find Books"
        />
      </InputGroup>
      <br />
    </div>
  )
}

SearchInput.propTypes = {
  onChange: PropTypes.func,
}

export default SearchInput;
