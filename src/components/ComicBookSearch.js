import React from 'react';
import PropTypes from 'prop-types';
import SearchInput from './SearchInput';
import SearchResults from './SearchResults';
import _ from 'lodash';
import { Col, Row, Card, CardBody, } from 'reactstrap';


const ComicBookSearch = ({ results, onSearch, onSelect, placeholder, onToggle, isOpen, toggleAccordion  }) => {

  return (
    <div>
       <Row>
        <Col xs="12" sm="6" lg="12">
          <Card>
            <CardBody>  
              <SearchInput placeholder={placeholder} onChange={_.debounce(onSearch, 1500)} />
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs="12" sm="6" lg="12">
          <Card>
            <CardBody>  
              <SearchResults isOpen={isOpen} results={results} onSelect={onSelect} toggleAccordion={toggleAccordion} />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

ComicBookSearch.propTypes = {
  onSearch: PropTypes.func,
  onSelect: PropTypes.func,
  results: PropTypes.array,
  placeholder: PropTypes.string,
}

export default ComicBookSearch;