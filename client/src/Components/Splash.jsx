import React from "react";
import "../Styles/splash.scss";
import Banner from "./Banner.jsx";
import { Button } from "react-bootstrap";

const Splash = props => {
  return (
    <>
      <div className="splashContainer">
        <Banner />
      </div>
      <div id="action-selector">
        <div>
          <Button
            id="splashButton"
            onClick={props.clickHandler}
            value="Lost"
            variant="light"
          >
            I found a dog
          </Button>
          <Button
            id="splashButton"
            onClick={props.clickHandler}
            value="Found"
            variant="light"
          >
            I lost my dog
          </Button>
        </div>
      </div>
    </>
  );
};

export default Splash;
