import React from 'react';
import PropTypes from 'prop-types';
import SearchInput from './SearchInput';
import SearchResults from './SearchResults';
import _ from 'lodash';
import { Col, Row, Card, CardBody, Container } from 'reactstrap';


const ComicBookSearch = ({ results, onSearch, onSelect, placeholder, isEmpty, isOpen, toggleAccordion}) => {

  return (
    <div>
    <Container>
       <Row>
        <Col xs="12" sm="12" lg="12">
              <SearchInput 
              placeholder={placeholder} 
              onChange={_.debounce(onSearch, 1000)}  />
        </Col>
        </Row>
      </Container>
      <Container>
      <Row>
        <Col xs="12" sm="12" lg="12">
              <SearchResults 
                isOpen={isOpen} 
                results={results} 
                onSelect={onSelect} 
                toggleAccordion={toggleAccordion} 
                isEmpty={isEmpty} />
        </Col>
      </Row>
    </Container>
    </div>
  )
}

ComicBookSearch.propTypes = {
  onSearch: PropTypes.func,
  onSelect: PropTypes.func,
  results: PropTypes.array,
  isEmpty: PropTypes.bool,
  placeholder: PropTypes.string,
  checkResultsForEmpty: PropTypes.func
}

export default ComicBookSearch;