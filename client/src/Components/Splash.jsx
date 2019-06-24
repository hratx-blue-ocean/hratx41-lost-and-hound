import React from "react";
import "../Styles/splash.scss";
//import { Container } from "react-bootstrap";
// import Lost from "./Lost.jsx";
// import Found from "./Found.jsx";

const Splash = props => {
  return (
    <>
      <div className="header">
        <div>Lost and Hound</div>
      </div>
      <div className="splashContainer">
        <div>I</div>
        <div>
          <button
          // onClick={() => {
          //   props.setPageType(<Lost />);
          // }}
          >
            Lost
          </button>
          <button
          // onClick={() => {
          //   props.setPageType(<Found />);
          // }}
          >
            Found
          </button>
        </div>
        <div>A DOG</div>
      </div>
      <div className="footer">
        <div>Pawter</div>
      </div>
    </>
  );
};

export default Splash;
