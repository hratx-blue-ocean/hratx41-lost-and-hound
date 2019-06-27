import React from "react";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import ResultsList from "./ResultsList.jsx";
import LoadingPage from "./loadingPage.jsx";
const SearchForm = props => {
  const action = props.action;
  let formTitle = "";
  if (action === "Lost") {
    formTitle = "enter details for the dog that you lost";
  }

  return (
    <div>
      {props.results.length === 0 ? <LoadingPage /> : null}
      <Container id="searchForm">
        <Row>
          <Col md={3}>
            <h3>
              enter details for {action === "Lost" ? "lost" : "found"} dog
            </h3>
            <Form className="m-3">
              <Form.Group>
                <Form.Label>
                  {action === "Lost"
                    ? "where was your dog last seen?"
                    : "where did you find this dog?"}
                </Form.Label>
                <Form.Control
                  onChange={props.text}
                  type="number"
                  id="zipcode"
                  placeholder="zipcode"
                />
                <Form.Label>
                  {" "}
                  {action === "Lost"
                    ? "when was your dog last seen?"
                    : "when did you find this dog?"}
                </Form.Label>
                <Form.Control
                  type="Date"
                  onChange={props.text}
                  id="lostDate"
                  placeholder="Enter Date Lost"
                />
                <Form.Label>
                  {" "}
                  {action === "Lost"
                    ? "what color is your dog?"
                    : "what color this dog?"}
                </Form.Label>
                <Form.Control
                  onChange={props.text}
                  id="color"
                  type="text"
                  placeholder="Color"
                />
                <Form.Label>
                  {" "}
                  {action === "Lost" ? "gender?" : "gender?"}
                </Form.Label>
                <Form.Control onChange={props.text} id="gender" as="select">
                  <option>Male</option>
                  <option>Female</option>
                </Form.Control>
              </Form.Group>
              <Button variant="light" className="m-3" onClick={props.fetch}>
                Fetch
              </Button>
            </Form>
          </Col>
          <Col md={9}>
            {props.results.length === 0 ? null : (
              <ResultsList results={props.results} action={props.action} />
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default SearchForm;
