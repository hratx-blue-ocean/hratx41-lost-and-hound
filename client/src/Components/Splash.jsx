import React from "react";
import "../Styles/splash.scss";
import { Container } from "react-bootstrap";
// import Lost from "./Lost.jsx";
// import Found from "./Found.jsx";

const Splash = props => {
  return (
    <>
      <Container>
        <div id="centerModal">
          I<br />
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
          <br />A DOG
        </div>
      </Container>
    </>
  );
};

export default Splash;
