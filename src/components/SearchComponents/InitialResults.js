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

  InitialResults.propTypes = {
  initialResults: PropTypes.array,
  onSelect: PropTypes.func,
}

export default InitialResults;
