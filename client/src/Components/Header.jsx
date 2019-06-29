import React from "react";
import "../Styles/splash.scss";
import { Navbar, Button } from "react-bootstrap";
import "../Styles/header.scss";
import Logo from "./Assets/Logo.jsx";

// const onSignIn = googleUser => {
//   // Useful data for your client-side scripts:
//   var profile = googleUser.getBasicProfile();
//   console.log("ID: " + profile.getId()); // Don't send this directly to your server!
//   console.log("Full Name: " + profile.getName());
//   console.log("Given Name: " + profile.getGivenName());
//   console.log("Family Name: " + profile.getFamilyName());
//   console.log("Image URL: " + profile.getImageUrl());
//   console.log("Email: " + profile.getEmail());

//   // The ID token you need to pass to your backend:
//   var id_token = googleUser.getAuthResponse().id_token;
//   console.log("ID Token: " + id_token);
// };

const Header = props => {
  return (
    <Navbar id="nav" sticky="top" expand="lg">
      <Navbar.Brand className="navTitle" onClick={props.homeRedirect}>
        <Logo id="brand-icon" width={40} />
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
//
