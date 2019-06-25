import React from "react";
import "../Styles/splash.scss";
import { Navbar } from "react-bootstrap";

const Header = props => {
  return (
    <Navbar sticky="top" bg="light" expand="lg">
      <Navbar.Brand>Lost And Hound</Navbar.Brand>
    </Navbar>
  );
};

export default Header;
