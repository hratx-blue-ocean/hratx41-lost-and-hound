import React from "react";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import ResultsList from "./ResultsList.jsx";
import LoadingPage from "./loadingPage.jsx";
const SearchForm = props => {
  return (
    <div>
      {props.results.length === 0 ? <LoadingPage /> : null}
      <Container id="searchForm">
        <Row>
          <Col md={2}>
            <Form className="m-3">
              <Form.Group>
                <Form.Label>Zipcode</Form.Label>
                <Form.Control
                  onChange={props.text}
                  type="number"
                  id="zipcode"
                  placeholder="Enter Zip"
                />
                <Form.Label>Lost Date</Form.Label>
                <Form.Control
                  type="Date"
                  onChange={props.text}
                  id="lostDate"
                  placeholder="Enter Date Lost"
                />
                <Form.Label>Color</Form.Label>
                <Form.Control
                  onChange={props.text}
                  id="color"
                  type="text"
                  placeholder="Color"
                />
                <Form.Label>Gender</Form.Label>
                <Form.Control onChange={props.text} id="gender" as="select">
                  <option>Male</option>
                  <option>Female</option>
                </Form.Control>
              </Form.Group>
              <Button className="m-3" onClick={props.fetch}>
                Fetch
              </Button>
            </Form>
          </Col>
          <Col md={8}>
            {props.results.length === 0 ? null : (
              <ResultsList results={props.results} action={props.action} />
            )}
          </Col>
          <Col md={2} />
        </Row>
      </Container>
    </div>
  );
};
export default SearchForm;
