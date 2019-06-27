import React from "react";
import { Card, Form, Button, Container } from "react-bootstrap";

class PostDog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postData: {
        email: "",
        zipcode: 0,
        date: "",
        color: "",
        gender: ""
      }
    };
    this.setForm = this.setForm.bind(this);
    this.postForm = this.postForm.bind(this);
  }
  setForm(e) {
    let temp = e.target.id;
    let value = e.target.value;
    if (temp === "date") {
      value += "T00:00:00.000";
    }
    this.setState((prevState, props) => {
      prevState.postData[temp] = value;
      return { postData: prevState.postData };
    });
  }
  postForm(e) {
    console.log(this.state);
  }
  render() {
    return (
      <Container>
        <Form>
          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control onChange={this.setForm} id="email" type="text" />
            <Form.Label>Zipcode</Form.Label>
            <Form.Control onChange={this.setForm} id="zipcode" type="number" />
            <Form.Label>Lost / Found Date</Form.Label>
            <Form.Control onChange={this.setForm} id="date" type="date" />
            <Form.Label>Color</Form.Label>
            <Form.Control onChange={this.setForm} id="color" type="text" />
            <Form.Label>Gender</Form.Label>
            <Form.Control onChange={this.setForm} id="gender" as="select">
              <option>Male</option>
              <option>Female</option>
            </Form.Control>
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              id="image"
              type="text"
              placeholder="Please use an imgur link or similar"
            />
          </Form.Group>
          <Button onClick={this.postForm}>Submit</Button>
        </Form>
      </Container>
    );
  }
}

export default PostDog;
