import React from "react";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
//
const SearchForm = props => {
  return (
    <div>
      <Container className="mx-0">
        <Row>
          <Col sm={4}>
            <Form className="m-3">
              <Form.Control
                onChange={props.text}
                type="number"
                id="zipcode"
                placeholder="Enter Zip"
              />
              <Form.Control
                type="Date"
                onChange={props.text}
                id="date"
                placeholder="Enter Date Lost"
              />
              <Form.Control
                onChange={props.text}
                id="color"
                type="text"
                placeholder="Color"
              />
              <Form.Control onChange={props.text} id="size" as="select">
                <option>Size</option>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
              </Form.Control>
              <Form.Control onChange={props.text} id="gender" as="select">
                <option>Gender</option>
                <option>Male</option>
                <option>Female</option>
              </Form.Control>
            </Form>
          </Col>
          <Col sm={2} />
          <Col sm={5}>
            <Form className="m-3">
              <Form.Control
                type="text"
                onChange={props.text}
                id="search"
                placeholder="Search"
              />
            </Form>
          </Col>
          <Col md={1}>
            <Button className="m-3" onClick={props.fetch}>
              Fetch
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SearchForm;

//
