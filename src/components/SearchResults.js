import React from 'react';
import PropTypes from 'prop-types';
import { 
  Card, 
  CardTitle, 
  CardBody, 
  CardHeader,
  Button,
  Col,
  Collapse
 } from 'reactstrap';

const SearchResult = ({ results, onSelect, toggleAccordion, isOpen }) => (
  <div>
      <Col xs="12" sm="6" lg="12">
        {results.map((res, i) => (
        <Col xs="6" sm="6" lg="12" key={i}>
          <Card> 
            <CardHeader>
              <CardTitle>
              <Button block color="link" onClick={() => toggleAccordion(res.id)} >
                <img src={res.thumbnailSmall} alt="Card cap" className="small-thumb" />
                <i className="fa fa-align-justify"></i><strong>{res.title}</strong>
              </Button>
              </CardTitle>
              <Button onClick={() => onSelect(res.id)} className="float-right">See Details</Button>
            </CardHeader>
            <Collapse isOpen={isOpen}>
              <Card>
                <CardBody>
                  {res.description}
                </CardBody>
              </Card>
            </Collapse>
          </Card>
          </Col>
        ))}
    </Col>
  </div>
  )

SearchResult.propTypes = {
  results: PropTypes.array,
  onSelect: PropTypes.func,
}

export default SearchResult;
