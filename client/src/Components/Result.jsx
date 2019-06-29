import React from "react";
import { Card, Button, ListGroup } from "react-bootstrap";
import "../Styles/result.scss";

const Result = props => {
  return (
    <div className="card-div">
      <Card className="dog-card">
        <Card.Img variant="top" src={props.result.image} />
        <Card.Body>
          <ListGroup>
            {props.result.age ? (
              <ListGroup.Item>{props.result.age}</ListGroup.Item>
            ) : null}
            <ListGroup.Item>{props.result.color}</ListGroup.Item>
            <ListGroup.Item>{props.result.looksLike}</ListGroup.Item>
            <ListGroup.Item>{props.result.sex}</ListGroup.Item>
            <ListGroup.Item>
              <a
                href={`https://lost-and-hound.com/flyer?id=${props.result._id}`}
              >
                Click For More Information
              </a>
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Result;
