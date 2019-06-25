import React from "react";
import "../Styles/splash.scss";
import { Navbar } from "react-bootstrap";

const Header = props => {
  return (
    <Navbar sticky="top" bg="light" expand="lg">
      <Navbar.Brand className="navTitle" onClick={props.homeRedirect}>
        Lost And Hound
      </Navbar.Brand>
      <a class="nav-link" href="#">
        About
      </a>
      <a class="nav-link" href="#">
        Resources
      </a>
    </Navbar>
  );
};

export default Header;
