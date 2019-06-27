import React from "react";
import { Card, Button, ListGroup } from "react-bootstrap";
import "../Styles/result.scss";

const Result = props => {
  return (
    <div className="card-div">
      <Card className="dog-card">
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
            {props.result.age ? (
              <ListGroup.Item>{props.result.age}</ListGroup.Item>
            ) : null}
            <ListGroup.Item>{props.result.color}</ListGroup.Item>
            <ListGroup.Item>{props.result.looksLike}</ListGroup.Item>
            <ListGroup.Item>{props.result.sex}</ListGroup.Item>
            <ListGroup.Item>
              <a href={`http://localhost:8000/flyer?id=${props.result._id}`}>
                Click
              </a>
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
};
//
export default Result;
