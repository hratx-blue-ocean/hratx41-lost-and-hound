import React from "react";
import "../Styles/splash.scss";
import { Navbar } from "react-bootstrap";

const Header = props => {
  return (
    <Navbar sticky="top" bg="light" expand="lg">
      <Navbar.Brand className="navTitle" onClick={props.homeRedirect}>
        <img src="./assets/logo.png" width="40" />
      </Navbar.Brand>
      <a className="nav-link" href="#">
        about
      </a>
      <a className="nav-link" href="#">
        resources
      </a>
    </Navbar>
  );
};

export default Header;
