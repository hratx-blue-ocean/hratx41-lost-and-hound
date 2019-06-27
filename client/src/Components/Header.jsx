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
      <Nav className="ml-auto">
        <Nav.Link
          className="g-signin2"
          data-onsuccess="onSignIn"
          data-theme="dark"
        />
        <Nav.Link>
          <a href="#" onClick={window.signOut}>
            Sign out
          </a>
        </Nav.Link>
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#resources">Resources</Nav.Link>
      </Nav>
      <Button className="mr-sm-2" value="post" onClick={props.clickHandler}>
        Submit a Lost or Found Dog
      </Button>
    </Navbar>
  );
};

export default Header;
//
