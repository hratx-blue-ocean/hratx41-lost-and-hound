import React from "react";
import "../Styles/splash.scss";
import { Navbar, Nav, Button } from "react-bootstrap";
import "../Styles/header.scss";

const Header = props => {
  return (
    <Navbar id="nav" sticky="top" bg="light" expand="lg">
      <Navbar.Brand className="navTitle" onClick={props.homeRedirect}>
        <img alt="logo" src="./assets/logo.png" width="40" />
      </Navbar.Brand>
      <Nav id="links" className="ml-auto">
        <Button variant="light">about</Button>
        <Button variant="light">resouces</Button>
        <Button
          variant="light"
          className="mr-sm-2"
          value="post"
          onClick={props.clickHandler}
        >
          submit a lost or found dog
        </Button>
      </Nav>
    </Navbar>
  );
};

export default Header;
