import React from "react";
import { Card, Button, ListGroup } from "react-bootstrap";

const Result = props => {
  return (
    // <div>
    //   <div>Image</div>
    //   <div>Name</div>
    //   <div>Description</div>
    // </div>
    <Card style={{ width: "33%" }}>
      <Card.Img variant="top" src={props.result.image.url} />
      <Card.Body>
        <ListGroup>
          <ListGroup.Item>{props.result.age}</ListGroup.Item>
          <ListGroup.Item>{props.result.color}</ListGroup.Item>
          <ListGroup.Item>{props.result.looks_like}</ListGroup.Item>
          <ListGroup.Item>{props.result.sex}</ListGroup.Item>
        </ListGroup>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default Result;
