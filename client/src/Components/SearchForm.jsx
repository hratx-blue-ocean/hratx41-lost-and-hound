import React from "react";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import ResultsList from "./ResultsList.jsx";
import LoadingPage from "./loadingPage.jsx";
const SearchForm = props => {
  const action = props.action;
  let formTitle = "";
  if (action === "Found") {
    formTitle = "enter details for the dog that you lost";
  }
  let filterObj = {
    color: null,
    lostDate: null,
    gender: null,
    zipcode: null
  };

  return (
    <div>
      {props.results.length === 0 ? <LoadingPage /> : null}
      <Container id="searchForm">
        <Row>
          <Col md={3}>
            <h3>
              enter details for {action === "Found" ? "lost" : "found"} dog
            </h3>
            <Form className="m-3">
              <Form.Group>
                <Form.Label>
                  {action === "Found"
                    ? "where was your dog last seen?"
                    : "where did you find this dog?"}
                </Form.Label>
                <Form.Control
                  onChange={e => {
                    filterObj.zipcode = e.target.value;
                  }}
                  type="number"
                  id="zipcode"
                  placeholder="zipcode"
                />
                <Form.Label>
                  {" "}
                  {action === "Found"
                    ? "when was your dog last seen?"
                    : "when did you find this dog?"}
                </Form.Label>
                <Form.Control
                  type="Date"
                  onChange={e => {
                    filterObj.lostDate = e.target.value;
                  }}
                  id="lostDate"
                  placeholder="Enter Date Lost"
                />
                <Form.Label>
                  {" "}
                  {action === "Found"
                    ? "what color is your dog?"
                    : "what color is this dog?"}
                </Form.Label>
                <Form.Control
                  onChange={e => {
                    filterObj.color = e.target.value;
                  }}
                  id="color"
                  type="text"
                  placeholder="Color"
                />
                <Form.Label>
                  {" "}
                  {action === "Found" ? "gender?" : "gender?"}
                </Form.Label>
                <Form.Control
                  onChange={e => {
                    filterObj.gender = e.target.value;
                  }}
                  id="gender"
                  as="select"
                >
                  <option>Select</option>
                  <option>Male</option>
                  <option>Female</option>
                </Form.Control>
              </Form.Group>
              <Button
                variant="light"
                className="m-3"
                onClick={() => {
                  props.fetch(filterObj);
                }}
              >
                Fetch
              </Button>
            </Form>
          </Col>
          <Col md={9}>
            {props.results.length === 0 ? null : (
              <ResultsList
                filter={props.filter}
                results={props.results}
                action={props.action}
              />
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default SearchForm;
