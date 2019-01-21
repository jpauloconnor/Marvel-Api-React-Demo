import React from 'react';
import {
    Jumbotron,
    Col,
    Row, 
    Container
} from 'reactstrap';

const SearchDirections = () => (
        <Jumbotron>
            <Row>
                <Col xs="3" lg="3"></Col>
                <Col xs="auto" lg="6" className="text-center">
                    <h1>Search the Marvel API</h1>
                </Col>
                <Col xs="3" lg="3"></Col>
            </Row>
            <Row>
                <Col xs="2" lg="3"></Col>
                <Col xs="auto" lg="6" className="text-center">
                    <p>Enter your favorite hero, villain, or book, and we'll find books for you.</p>
                </Col>
                <Col xs="2" lg="3"></Col>
            </Row>
        </Jumbotron>
);

export default SearchDirections;