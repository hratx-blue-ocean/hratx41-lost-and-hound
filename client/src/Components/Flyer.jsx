import React from "react";
import axios from "axios";
import { Card, ListGroup, Container, Navbar, Button } from "react-bootstrap";
class Flyer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doggieData: {
        name: "",
        image: "",
        age: 0,
        color: "",
        looksLike: "",
        sex: "",
        status: "",
        location: {
          city: "",
          state: "",
          zip: ""
        }
      }
    };
  }
  componentWillMount() {
    axios
      .get(`https://lost-and-hound.com/api/dog${this.props.location.search}`)
      .then(response =>
        this.setState(
          {
            doggieData: response.data
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }
  render() {
    return (
      <>
        <Navbar id="nav" sticky="top" bg="light" expand="lg">
          <Navbar.Brand
            className="navTitle"
            href={`https://lost-and-hound.com/`}
          >
            <img alt="logo" src="./assets/logo.png" width="40" />
          </Navbar.Brand>
        </Navbar>
        <Container className="mx-auto">
          <Card style={{ maxWidth: "30vw" }} className="text-center">
            <Card.Body>
              <Card.Title>{this.state.doggieData.status} Dog</Card.Title>
              <Card.Img variant="top" src={this.state.doggieData.image} />
              <ListGroup>
                <ListGroup.Item>{this.state.doggieData.name}</ListGroup.Item>
                {this.state.doggieData.age ? (
                  <ListGroup.Item>{this.state.doggieData.age}</ListGroup.Item>
                ) : null}
                <ListGroup.Item>{this.state.doggieData.color}</ListGroup.Item>
                <ListGroup.Item>
                  {this.state.doggieData.looksLike}
                </ListGroup.Item>
                <ListGroup.Item>{this.state.doggieData.sex}</ListGroup.Item>
                <ListGroup.Item>{this.state.doggieData.status}</ListGroup.Item>
                {this.state.doggieData.date ? (
                  <ListGroup.Item>
                    {this.state.doggieData.date.substring(0, 10)}
                  </ListGroup.Item>
                ) : null}
                <ListGroup.Item>
                  {this.state.doggieData.location.address +
                    ", " +
                    this.state.doggieData.location.zip}
                </ListGroup.Item>
              </ListGroup>
              <div id="fb-root" />
              {(function(d, s, id) {
                var js,
                  fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s);
                js.id = id;
                js.src =
                  "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
                fjs.parentNode.insertBefore(js, fjs);
              })(document, "script", "facebook-jssdk")}
              <div
                className="fb-share-button"
                data-href={`https://lost-and-hound.com/flyer/${
                  this.props.location.search
                }`}
                data-layout="button_count"
                data-size="large"
              />
            </Card.Body>
          </Card>
        </Container>
      </>
    );
  }
}
export default Flyer;
