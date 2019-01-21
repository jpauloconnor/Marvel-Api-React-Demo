import React from 'react';
import PropTypes from 'prop-types';
import { 
  Card, 
  CardTitle, 
  CardBody, 
  CardHeader,
  Button,
  Col,
  Collapse,
  Row
 } from 'reactstrap';

var initialData =  
[
  {"id": "21464","title": "Ultimate Spider-Man (Spanish Language Edition) (2000) #11", "thumbnailSmall": "http://i.annihil.us/u/prod/marvel/i/mg/6/c0/59079911f0fdb/portrait_small.jpg", "description": null, "toggleIsOpen": false},
  {"id": "58584","title": "The Amazing Spider-Man (2015) #16 (Jimenez Black Panther 50th Anniversary Variant)", "thumbnailSmall": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/portrait_small.jpg", "description": null, "toggleIsOpen": false},
  {"id": "60017","title": "The Amazing Spider-Man (2015) #24 (Lozano Teaser Variant)", "thumbnailSmall": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/portrait_small.jpg", "description": null, "toggleIsOpen": false},
  {"id": "21473","title": "Ultimate Spider-Man (Spanish Language Edition) (2000) #9", "thumbnailSmall": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/portrait_small.jpg", "description": null, "toggleIsOpen": false}
] 
const InitialResults = ({ onSelect, toggleAccordion, isOpen }) => (
  <React.Fragment>
        <Col>
           {initialData.map((res, i) => (
           <Col key={i}>
              <Card> 
                <CardHeader>
                  <Row>
                  <Col lg="2">
                    <CardTitle onClick={() => toggleAccordion(res.id)} >
                      <img src={res.thumbnailSmall} alt="Card cap" className="rounded-circle" />
                    </CardTitle>
                  </Col>
                  <Col lg="8" onClick={() => toggleAccordion(res.id)} className="align-self-center">
                      <strong>{res.title}</strong>
                  </Col>
                  <Col lg="2" className="align-self-center">
                    <Button onClick={() => onSelect(res.id)} className="float-right">See Details</Button>
                  </Col>
                </Row>
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

  InitialResults.propTypes = {
  initialResults: PropTypes.array,
  onSelect: PropTypes.func,
}

export default InitialResults;
