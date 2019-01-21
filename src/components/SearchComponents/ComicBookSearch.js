import React from 'react';
import PropTypes from 'prop-types';
import SearchInput from './SearchInput';
import SearchResults from './SearchResults';
import _ from 'lodash';
import { Col, Row, Container } from 'reactstrap';


const ComicBookSearch = ({ results, onSearch, onSelect, placeholder, isEmpty, isOpen, toggleAccordion}) => {

  return (
    <div>
    <Container>
      <Row>
        <Col>
              <SearchInput 
                placeholder={placeholder} 
                onChange={_.debounce(onSearch, 1000)}  />
        </Col>
      </Row>
    </Container>
    <Container>
      <Row>
        <Col>
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