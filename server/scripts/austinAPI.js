const axios = require('axios');
const db = require('./../database');

const getAACFoundData = () => {
	let currDate = '2019-05-25T00:00:00.000';
	const intakeDate = 'intake_date >= "' + currDate + '"';
	const queryParams = {
		$$app_token: process.env.APP_TOKEN,
		type: 'Dog',
		$where: intakeDate,
	};

	axios
		.get(process.env.AAC_URL, { params: queryParams })
		.then(dogResults => {
      let dogData = dogResults.data.map((dog) => {
        return {
          image: 'http://petharbor.com/get_image.asp?RES=Detail&LOCATION=ASTN&ID=' + dog.animal_id,
          name: null,
          color: dog.color,
          date: Date(dog['intake_date']),
          looksLike: dog['looks_like'],
          sex: dog.sex,
          location: JSON.parse(dog.location['human_address']),
          status: 'Found'
        };
      });
			db.uploadDogs(dogData, (err) => {
        if (err) {
          console.error(err);
        }
      });
		})
		.catch(err => {
			throw err;
		});
};

module.exports = { getAACFoundData };
