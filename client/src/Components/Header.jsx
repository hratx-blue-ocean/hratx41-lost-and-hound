import React from "react";
import "../Styles/splash.scss";
import { Navbar, Button } from "react-bootstrap";
import "../Styles/header.scss";

const Header = props => {
  return (
    <Navbar id="nav" sticky="top" bg="light" expand="lg">
      <Navbar.Brand className="navTitle" onClick={props.homeRedirect}>
        <img alt="logo" src="./assets/logo.png" width="40" />
      </Navbar.Brand>

      <Button
        className="mr-sm-2"
        value="about"
        onClick={props.clickHandler}
        variant="light"
      >
        about
      </Button>

      <Button
        className="mr-sm-2"
        value="resources"
        onClick={props.clickHandler}
        variant="light"
      >
        resources
      </Button>

      <Button
        className="mr-sm-2"
        value="post"
        onClick={props.clickHandler}
        variant="light"
      >
        submit a lost or found dog
      </Button>

      <Button
        className="g-signin2 ml-auto googleSign"
        data-onsuccess="onSignIn"
        data-theme="dark"
        variant="light"
      />

      <Button
        className="mr-sm-2"
        value="signout"
        onClick={window.signOut}
        variant="light"
      >
        sign out
      </Button>
    </Navbar>
  );
};

export default Header;
