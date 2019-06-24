<<<<<<< HEAD
import React from "react";
import "../Styles/splash.scss";
//import { Container } from "react-bootstrap";
=======
import React from 'react';
import '../Styles/splash.scss';
import { Container } from 'react-bootstrap';
import Search from './Search.jsx';
>>>>>>> develop
// import Lost from "./Lost.jsx";
// import Found from "./Found.jsx";

const Splash = props => {
<<<<<<< HEAD
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
=======
	return (
		<>
			<Container>
				<div id="centerModal">
					I<br />
					<button
						id="Lost"
						onClick={() => {
							props.setPageType(<Search action={'lost'} setPageType={props.setPageType} />);
						}}
					>
						Lost
					</button>
					<button
						id="Found"
						onClick={() => {
							props.setPageType(<Search action={'found'} setPageType={props.setPageType} />);
						}}
					>
						Found
					</button>
					<br />A DOG
				</div>
			</Container>
		</>
	);
>>>>>>> develop
};

export default Splash;
