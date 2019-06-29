import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../Styles/splash.scss";
import "../Styles/about.scss";

let picture = () => {
  window.open = "http://google.com";
};

const About = props => {
  return (
    <Container id="about-container">
      <Row>
        <Col sm={2} />
        <Col id="center-column" sm={8}>
          <div id="about-contents">
            <h2 className="mission">Our Mission</h2>
            <h6 className="mission">
              <strong>Empower dogs</strong>
            </h6>
            <p>
              {" "}
              Lost and Hound is committed to helping you find your lost animals.
              We understand the pain of losing your best friend and the stress
              of finding someone elses. Our mission is to use the power of
              technology to bring people who care about their pets together.
            </p>
            <img src="https://lost-and-hound.com/assets/aboutus.jpg" />
          </div>
        </Col>
        <Col sm={2} />
      </Row>
    </Container>
  );
};

export default About;
