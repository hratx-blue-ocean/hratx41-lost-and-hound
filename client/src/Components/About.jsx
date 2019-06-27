import React from "react";
import "../Styles/splash.scss";
import { Container, Row } from "react-bootstrap";

let picture = () => {
  window.open = "http://google.com";
};

const About = props => {
  return (
    <div className="jumbotron">
      <h3 className="mission">Our Mission</h3>
      <h6 className="mission">"Empower dogs"</h6>
      <h1 className="display-4">About</h1>
      {/* <p className="lead"> */}
      {/* { This is a simple hero unit, a simple jumbotron-style component for */}
      {/* calling extra attention to featured content or information. */}
      {/* </p> */}
      <hr className="my-4" />
      <p>
        {" "}
        Lost and Hound is committed to helping you find your lost animals. We
        understand the pain of losing your best friend and the stress of finding
        someone elses. Our mission is to use the power of technology to bring
        people who care about their pets together.
      </p>
      <a
        className="btn btn-primary btn-lg"
        href="#"
        role="button"
        onClick={() => {
          window.open(
            "https://images.beano.com/store/5158913ed4f44b801ce1019926f3da2fa05a43be18a73ef71d5c62a93da7?auto=compress&w=960&fit=max"
          );
        }}
      >
        Learn more
      </a>
    </div>
  );
};

export default About;
