const zipcodes = require('zipcodes');
const axios = require('axios');

const getAACFoundData = (searchParams, callback) => {
	const zipcode = searchParams.zipcode || '78704';
	let currDate = '2019-06-12T00:00:00.000';
	if (searchParams.lostDate) {
		currDate = searchParams.lostDate;
	}
	const intakeDate = 'intake_date >= "' + currDate + '"';
	const addParams = {
		$$app_token: process.env.APP_TOKEN,
		type: 'Dog',
		$where: intakeDate,
	};
	if (searchParams.lostDate) {
		delete searchParams.lostDate;
	}
	const queryParams = { ...searchParams, ...addParams };

	const sortDist = (obj1, obj2) => {
		return (
			zipcodes.distance(zipcode, JSON.parse(obj1.location['human_address']).zip) -
			zipcodes.distance(zipcode, JSON.parse(obj2.location['human_address']).zip)
		);
	};

	axios
		.get(process.env.AAC_URL, { params: queryParams })
		.then(dogResults => {
			// console.log(dogResults);
			dogResults.data.sort(sortDist);
			callback(null, dogResults.data);
		})
		.catch(err => {
			callback(err);
		});
};

module.exports = { getAACFoundData };
