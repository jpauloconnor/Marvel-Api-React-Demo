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

const SearchResultsTrue = ({ results, onSelect, toggleAccordion, isOpen }) => (
  <React.Fragment>
        <Col>
           {results.map((res, i) => (
           <Col key={i}>
              <Card> 
                <CardHeader>
                  <Col className="col-12 col-sm-12 col-lg-12" >
                    <CardTitle onClick={() => toggleAccordion(res.id)} >
                      <img src={res.thumbnailSmall} alt="Card cap" className="small-thumb" />
                      <strong>{res.title}</strong>
                    </CardTitle>
                    <Button onClick={() => onSelect(res.id)} className="float-right">See Details</Button>
                  </Col>
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
  </React.Fragment>
  )

SearchResultsTrue.propTypes = {
  results: PropTypes.array,
  onSelect: PropTypes.func,
}

export default SearchResultsTrue;
