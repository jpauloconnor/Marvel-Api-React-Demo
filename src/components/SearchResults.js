import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, 
  ListGroupItem, 
  Card, 
  CardImg, 
  CardSubtitle, 
  CardTitle, 
  CardText, 
  CardBody, 
  Button,
  Container,
  Col, 
  Row } from 'reactstrap';

const SearchResult = ({ results, onSelect }) => (
  <div>
    <ListGroup> 
    <Container>  
      <Row>
      {results.map((res, i) => (
        <Col xs="6" sm="4" key={i}>
        <Card>
        <ListGroupItem key={i} onClick={() => onSelect(res.id)}>
        <CardImg top width="100%" src={res.thumbnail} alt="Card image cap" />
        <CardBody>
          <CardTitle>{res.title}</CardTitle>
          <Button>Button</Button>
        </CardBody>

        </ListGroupItem>
      </Card>
        </Col>
      ))}
      </Row>
      </Container>  

    </ListGroup>
  </div>
)

SearchResult.propTypes = {
  results: PropTypes.array,
  onSelect: PropTypes.func,
}

export default SearchResult;
