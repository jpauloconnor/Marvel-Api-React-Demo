import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, 
  ListGroupItem, 
  Card, 
  CardImg, 
  CardTitle, 
  CardBody, 
  CardHeader,
  Button,
  Container,
  Col, 
  Row,
  Media } from 'reactstrap';


const SearchResult = ({ results, onSelect }) => (
  <div>
  <Row>
    <Col sm="12" xl="6" md="4">
      {results.map((res, i) => (
        <Card key={i}>
         <Media left href="#">
        <Media object data-src={res.thumbnail} alt="Generic placeholder image" />
      </Media>
          <CardHeader>
            <i className="fa fa-align-justify"></i><strong>{res.title}</strong>
          </CardHeader>
          <CardBody>
            Foo bar lorem ipsum fooo stuff.
          </CardBody>
        </Card>
      ))}
    </Col>
  </Row>
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
