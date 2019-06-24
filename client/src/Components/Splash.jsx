import React from "react";
import "../Styles/splash.scss";
//import { Container } from "react-bootstrap";
// import Lost from "./Lost.jsx";
// import Found from "./Found.jsx";

const Splash = props => {
  return (
    <>
      <h3 className="header">Lost and Hound</h3>
      <div className="splashContainer">
        <h3>I</h3>
        <div>
          <button
            className="splashButton"
            value="Lost"
            onClick={props.clickHandler}
          >
            Lost
          </button>
          <button
            className="splashButton"
            value="Found"
            onClick={props.clickHandler}
          >
            Found
          </button>
        </div>
        <h3>A DOG</h3>
      </div>
      <div className="footer">Pawter Placeholder</div>
    </>
  );
};

export default Splash;
