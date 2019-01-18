import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'reactstrap';

const SearchResult = ({ results, onSelect }) => (
  <div>
    <ListGroup>   
      {results.map(res => (
        <ListGroupItem key={res.id} onClick={() => onSelect(res.id)}>
        {res.title}
        </ListGroupItem>
      ))}
    </ListGroup>
  </div>
)

SearchResult.propTypes = {
  results: PropTypes.array,
  onSelect: PropTypes.func,
}

export default SearchResult;
