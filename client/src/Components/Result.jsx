import React from "react";
import { Card, Button, ListGroup } from "react-bootstrap";

const Result = props => {
  return (
    <>
      <Card style={{ width: "33%" }}>
        <Card.Img variant="top" src={props.result.image.url} />
        <Card.Body>
          <ListGroup>
            <ListGroup.Item>{props.result.age}</ListGroup.Item>
            <ListGroup.Item>{props.result.color}</ListGroup.Item>
            <ListGroup.Item>{props.result.looks_like}</ListGroup.Item>
            <ListGroup.Item>{props.result.sex}</ListGroup.Item>
          </ListGroup>
          <Button
            onClick={() => {
              props.resultExpand(props.index);
            }}
            variant="primary"
          >
            More Info
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Result;
