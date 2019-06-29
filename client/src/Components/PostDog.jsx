import React from "react";
import { Form, Button, Container, Col } from "react-bootstrap";
import axios from "axios";
class PostDog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postData: {
        date: "",
        color: "",
        sex: ""
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
    const data = {
      color: this.state.postData.color,
      date: this.state.postData.date,
      sex: this.state.postData.sex,
      location: {
        address: this.state.postData.address,
        city: this.state.postData.city,
        state: this.state.postData.state,
        zip: this.state.postData.zip
      },
      name: this.state.postData.name,
      status: this.state.postData.status,
      looksLike: this.state.postData.looksLike,
      image: this.state.postData.image
    };
    axios
      .post("https://lost-and-hound.com/api/dog", data)
      .then(response => console.log(response))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <Container>
        <Form>
          <Form.Group>
            <Form.Label>Address</Form.Label>
            <Form.Control
              onChange={this.setForm}
              id="address"
              type="text"
              placeholder="1234 Main St"
            />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>City</Form.Label>
              <Form.Control onChange={this.setForm} id="city" type="text" />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>State</Form.Label>
              <Form.Control onChange={this.setForm} id="state" type="text" />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Zip</Form.Label>
              <Form.Control onChange={this.setForm} id="zip" type="text" />
            </Form.Group>
          </Form.Row>
          <Form.Group>
            <Form.Label>Lost / Found Date</Form.Label>
            <Form.Control onChange={this.setForm} id="date" type="date" />
            <Form.Label>Name</Form.Label>
            <Form.Control onChange={this.setForm} id="name" type="text" />
            <Form.Label>Color</Form.Label>
            <Form.Control onChange={this.setForm} id="color" type="text" />
            <Form.Label>Breed</Form.Label>
            <Form.Control onChange={this.setForm} id="looksLike" type="text" />
            <Form.Label>Gender</Form.Label>
            <Form.Control onChange={this.setForm} id="sex" as="select">
              <option>Select</option>
              <option>Male</option>
              <option>Female</option>
            </Form.Control>
            <Form.Label>Lost / Found</Form.Label>
            <Form.Control onChange={this.setForm} id="status" as="select">
              <option>Select</option>
              <option>Lost</option>
              <option>Found</option>
            </Form.Control>
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              onChange={this.setForm}
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
