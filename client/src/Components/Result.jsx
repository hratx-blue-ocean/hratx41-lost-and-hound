import React from "react";
import { Card, Button, ListGroup } from "react-bootstrap";
import "../Styles/result.scss";

const Result = props => {
  return (
    <Card>
      {props.action === "Found" ? (
        <Card.Img
          variant="top"
          src={`http://petharbor.com/get_image.asp?RES=Detail&ID=${
            props.result.animal_id
          }&LOCATION=ASTN`}
        />
      ) : (
        <Card.Img variant="top" src={props.result.image} />
      )}
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
//
export default Result;
