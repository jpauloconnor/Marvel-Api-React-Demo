import React, { Fragment} from 'react'

import {
  Card, 
  CardBody, 
  CardTitle,  
  CardText, 
  Button, 
  Row,
  Col
} from 'reactstrap';


export default ({ comicBook, onClose }) => (
  <React.Fragment>
    <br />
    <Row>
      <Col xs="12" sm="12" lg="12">
        <Card>
          <CardBody>
            <CardTitle className="h3 mb-2 pt-2 font-weight-bold text-secondary"><b>Title: </b>{comicBook.title}</CardTitle>
            {comicBook.description === null ?
            (
              <CardText className="text-secondary mb-4" style={{ fontSize: '0.75rem' }}>
              <b>Description</b>
              There is no description for this item.
              </CardText>
            )
            :
            (
              <CardText className="text-secondary mb-4" style={{ fontSize: '0.75rem' }}>
              <b>Description</b>
              <p>{comicBook.description}</p>
              </CardText>
            )}
            <CardText className="text-secondary mb-4"><b>Format:</b> {comicBook.format}</CardText>
            <CardText className="text-secondary mb-4"><b>Comic Book Id:</b> {comicBook.id}</CardText>
            <CardText className="text-secondary mb-4"><b>Pages:</b> {comicBook.pageCount}</CardText>
            <CardText className="text-secondary mb-4"><b>Series:</b> {comicBook.series.name}</CardText>
          </CardBody>
          <Button onClick={onClose}>Close</Button>
        </Card>
      </Col>
    </Row>
  </React.Fragment>
)
