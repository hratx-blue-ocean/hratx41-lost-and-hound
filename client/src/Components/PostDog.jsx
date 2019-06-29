import React from "react";
import { Form, Button, Container, Col, Row } from "react-bootstrap";
import "../Styles/post.scss";
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
      <Container id="post-container">
        <Row>
          <Col xs={1} />
          <Col xs={10}>
            <h2>Post a Lost/Found Dog</h2>
            <Form>
              <Form.Group>
                <Form.Label>address</Form.Label>
                <Form.Control
                  onChange={this.setForm}
                  id="address"
                  type="text"
                  placeholder="1234 Main St"
                />
              </Form.Group>

              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>city</Form.Label>
                  <Form.Control onChange={this.setForm} id="city" type="text" />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>state</Form.Label>
                  <Form.Control
                    onChange={this.setForm}
                    id="state"
                    type="text"
                  />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>zip</Form.Label>
                  <Form.Control onChange={this.setForm} id="zip" type="text" />
                </Form.Group>
              </Form.Row>
              <Form.Group>
                <Form.Label>lost / found Date</Form.Label>
                <Form.Control onChange={this.setForm} id="date" type="date" />
                <Form.Label>name</Form.Label>
                <Form.Control onChange={this.setForm} id="name" type="text" />
                <Form.Label>color</Form.Label>
                <Form.Control onChange={this.setForm} id="color" type="text" />
                <Form.Label>breed</Form.Label>
                <Form.Control
                  onChange={this.setForm}
                  id="looksLike"
                  type="text"
                />
                <Form.Label>gender</Form.Label>
                <Form.Control onChange={this.setForm} id="sex" as="select">
                  <option>select</option>
                  <option>sale</option>
                  <option>female</option>
                </Form.Control>
                <Form.Label>lost / found</Form.Label>
                <Form.Control onChange={this.setForm} id="status" as="select">
                  <option>select</option>
                  <option>lost</option>
                  <option>found</option>
                </Form.Control>
                <Form.Label>image URL</Form.Label>
                <Form.Control
                  onChange={this.setForm}
                  id="image"
                  type="text"
                  placeholder="Please use an imgur link or similar"
                />
              </Form.Group>
              <Button className="mx-auto" onClick={this.postForm}>
                submit
              </Button>
            </Form>
          </Col>
          <Col xs={1} />
        </Row>
      </Container>
    );
  }
}
//
export default PostDog;
