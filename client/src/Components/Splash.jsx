import React from "react";
import "../Styles/splash.scss";
import Banner from "./Banner.jsx";
import { Button } from "react-bootstrap";

const Splash = props => {
  return (
    <>
      <div className="splashContainer">
        <Banner />
        <div id="action-selector">
          <h3>I</h3>
          <div>
            <Button
              id="splashButton"
              onClick={props.clickHandler}
              value="Lost"
              variant="light"
            >
              lost
            </Button>
            <Button
              id="splashButton"
              onClick={props.clickHandler}
              value="Found"
              variant="light"
            >
              found
            </Button>
          </div>
          <h3>a dog</h3>
        </div>
      </div>
    </>
  );
};

export default Splash;
//
