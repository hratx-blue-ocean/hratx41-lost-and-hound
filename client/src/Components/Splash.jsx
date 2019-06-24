import React from 'react';
import '../Styles/splash.scss';
import { Container } from 'react-bootstrap';
import Search from './Search.jsx';
// import Lost from "./Lost.jsx";
// import Found from "./Found.jsx";

const Splash = props => {
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
};

export default Splash;
