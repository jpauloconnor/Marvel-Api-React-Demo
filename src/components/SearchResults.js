import React, {useState} from 'react';
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
          <Card key={i}> 
            <CardHeader>
              <CardTitle>
              <Button block color="link" onClick={() => toggleAccordion(true)} >
                <img src={res.thumbnailSmall} alt="Card image cap" className="small-thumb" />
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
        ))}
    </Col>
  </div>
  )

// const SearchResult = ({ results, onSelect }) => (
//   <div>
//     <ListGroup> 
//       <Container>  
//         <Row>
//         {results.map((res, i) => (
//           <Col xs="6" sm="4" key={i}>
//             <Card>
//               <ListGroupItem key={i} onClick={() => onSelect(res.id)}>
//                 <CardImg top width="100%" src={res.thumbnail} alt="Card image cap" />
//                 <CardBody>
//                   <CardTitle>{res.title}</CardTitle>
//                   <Button>See Book Details</Button>
//                 </CardBody>
//               </ListGroupItem>
//             </Card>
//           </Col>
//         ))}
//         </Row>
//       </Container>  
//     </ListGroup>
//   </div>
// )

SearchResult.propTypes = {
  results: PropTypes.array,
  onSelect: PropTypes.func,
}

export default SearchResult;
