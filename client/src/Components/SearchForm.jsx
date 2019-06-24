import React from "react";
import { Form, Button } from "react-bootstrap";
//
const SearchForm = props => {
  return (
    <div>
      <Form>
        <Form.Control
          type="text"
          onChange={props.text}
          id="search"
          placeholder="Search"
        />
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
      <Button onClick={props.fetch}>Fetch</Button>
    </div>
  );
};

export default SearchForm;
