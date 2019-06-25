import React from "react";
import { Form, Container, Row, Col, Button, Modal } from "react-bootstrap";
import ResultsList from "./ResultsList.jsx";
const SearchForm = props => {
  return (
    <div>
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
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="Date"
                  onChange={props.text}
                  id="date"
                  placeholder="Enter Date Lost"
                />
                <Form.Label>Color</Form.Label>
                <Form.Control
                  onChange={props.text}
                  id="color"
                  type="text"
                  placeholder="Color"
                />
                <Form.Label>Size</Form.Label>
                <Form.Control onChange={props.text} id="size" as="select">
                  <option>Small</option>
                  <option>Medium</option>
                  <option>Large</option>
                </Form.Control>
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
            <Form className="m-3">
              <Form.Control
                type="text"
                onChange={props.text}
                id="search"
                placeholder="Search"
              />
            </Form>
            {props.results === [] ? null : (
              <ResultsList
                resultExpand={props.resultExpand}
                modalView={props.modalView}
                results={props.results}
              />
            )}
          </Col>
          <Col md={2} />
        </Row>
      </Container>
      <Modal
        show={props.modalView}
        onHide={props.resultExpand}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body />

          <Modal.Footer />
        </Modal.Dialog>
      </Modal>
    </div>
  );
};

export default SearchForm;
