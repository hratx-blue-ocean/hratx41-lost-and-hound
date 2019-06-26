import React from "react";
import { Card, ListGroup, Container, Row } from "react-bootstrap";

const Flyer = props => {
  return (
    <Container>
      <Card className="text-center">
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <ListGroup>
            <ListGroup.Item />
            <ListGroup.Item />
            <ListGroup.Item />
            <ListGroup.Item />
          </ListGroup>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    </Container>
  );
};

export default Flyer;
