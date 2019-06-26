import React from "react";
import "../Styles/splash.scss";
import Banner from "./Banner.jsx";

const Splash = props => {
  return (
    <>
      <div className="splashContainer">
        <Banner />
        <div id="action-selector">
          <h3>I</h3>
          <div>
            <button
              className="splashButton"
              value="Lost"
              onClick={props.clickHandler}
            >
              lost
            </button>
            <button
              className="splashButton"
              value="Found"
              onClick={props.clickHandler}
            >
              found
            </button>
          </div>
          <h3>a dog</h3>
        </div>
      </div>
    </>
  );
};

export default Splash;
