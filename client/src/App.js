import React, { useState, useEffect } from 'react';
// import axios from "axios";
import Splash from './Components/Splash.jsx';
import './App.scss';

const App = () => {
	const [pageType, setPageType] = useState();
	const [action, setAction] = useState('');
	const [formData, setFormData] = useState({
		color: '',
		date: null,
		size: '',
		location: 0,
	});

	useEffect(() => {
		setPageType(<Splash setPageType={setPageType} />);
	}, []);

	useEffect(() => {
		//axios request
	}, [formData]);

	return <>{pageType}</>;
};

export default App;
