import React from "react";
import "../Styles/splash.scss";
import About from "./About.jsx";
import Banner from "./Banner.jsx";

const Splash = props => {
  return (
    <>
      <div className="splashContainer">
        <Banner />
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
      {/* <div className="footer">Pawter Placeholder</div> */}
      <div className="footer">
        <About />
      </div>
    </>
  );
};

export default Splash;
