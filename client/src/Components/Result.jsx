import React from "react";
import { Card, Button } from "react-bootstrap";

const Result = props => {
  return (
    // <div>
    //   <div>Image</div>
    //   <div>Name</div>
    //   <div>Description</div>
    // </div>
    <Card style={{ width: "33%" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Doggie Name</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default Result;
