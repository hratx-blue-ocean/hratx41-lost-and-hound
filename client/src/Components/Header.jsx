import React from "react";
import "../Styles/splash.scss";
import { Navbar, Button, Nav } from "react-bootstrap";

const Header = props => {
  return (
    <Navbar sticky="top" bg="light" expand="lg">
      <Navbar.Brand className="navTitle" onClick={props.homeRedirect}>
        Lost And Hound
      </Navbar.Brand>
      <Nav className="mr-auto">
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
