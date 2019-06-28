const getPHLostDogs = () => {
	const Nightmare = require('nightmare');
	const db = require('./../database');
	const nightmare = Nightmare({
		show: false,
	});

	nightmare
		//load a url
		.goto(
			'http://petharbor.com/results.asp?searchtype=PUBFOUND&start=4&stylesheet=include/default.css&frontdoor=1&friends=1&samaritans=1&nosuccess=0&rows=272&imght=300&imgres=detail&tWidth=200&view=sysadm.v_animal&nomax=1&fontface=arial&fontsize=10&zip=78759&miles=50&shelterlist=%27ASTN%27,%27GRGT%27,%27KLEN%27,%27HHTX%27,%27PFLG%27,%2791903%27,%2785257%27,%2772312%27,%2773748%27,%2763250%27,%2799671%27,%2778098%27,%2772699%27,%2786498%27,%2777056%27,%2786592%27,%2780971%27,%2776178%27,%2780018%27,%2792063%27,%2795288%27,%27106476%27,%27101804%27,%2785794%27,%2797274%27,%2789153%27,%27121365%27,%2798295%27,%2775304%27,%2778366%27,%2790607%27,%2776488%27,%2783335%27,%2788018%27,%27101752%27,%2790490%27,%2776816%27,%2787978%27,%2782004%27,%2789469%27,%2798504%27,%2786357%27,%27102091%27,%2777343%27,%2769562%27,%2782050%27,%2789868%27,%27101616%27,%27106910%27,%2784976%27,%2790690%27,%2786555%27,%27101790%27,%27104454%27,%27100055%27,%2782718%27,%2786148%27,%2778842%27,%2796520%27,%2775015%27,%2785506%27,%2777070%27,%2789220%27,%2769865%27,%2778344%27,%2783518%27,%2788989%27&atype=dog&where=type_DOG&NewOrderBy=Lost%20On&PAGE=1'
		)
		//simulate typing into an element identified by a CSS selector
		//here, Nightmare is typing into the search bar
		//.type('#uh-search-box', 'github nightmare')
		//click an element identified by a CSS selector
		//in this case, click the search button
		//.click('#uh-search-button')

		//wait 10 seconds to ensure page loads. HACKY
		//execute javascript on the page
		//here, the function is getting the HREF of the first search result
		.evaluate(function() {
			//get names
			// let allNames = document.querySelectorAll('.info h4');
			// allNames = [...allNames];
			// allNames = allNames.map(elem => elem.innerHTML);

			//get sex
			// let allGenders = document.querySelectorAll('.info h6:first-of-type');
			// allGenders = [...allGenders];
			// allGenders = allGenders.map(elem => elem.innerText.split(" ")[1]);
			let allGenders = document.querySelectorAll('tbody tr td:nth-of-type(4)');
			allGenders = [...allGenders];
			allGenders = allGenders.map(elem => elem.innerHTML);

			//get address
			// let allAdresses = document.querySelectorAll('.info h6:nth-of-type(2)');
			// allAdresses = [...allAdresses];
			// allAdresses = allAdresses.map(elem => {
			//   let address = elem.innerText;
			//   let zip = address.split("\n")[1];
			//   let city = address.split(",")[0];
			//   return {
			//     zip,
			//     city,
			//     state: "TX",
			//   }
			// });
			let allCities = document.querySelectorAll('tbody tr td:nth-of-type(5)');
			allCities = [...allCities];
			allCities = allCities.map(elem => elem.innerHTML);
			console.log(allCities);

			//get breed
			// let allBreeds = document.querySelectorAll('.custom li:first-of-type');
			// allBreeds = [...allBreeds];
			// allBreeds = allBreeds.map(elem => elem.innerHTML.trim());
			let allBreeds = document.querySelectorAll('tbody tr td:nth-of-type(3)');
			allBreeds = [...allBreeds];
			allBreeds = allBreeds.map(elem => elem.innerHTML);

			//get color
			// let allColors = document.querySelectorAll('.custom li:nth-of-type(2)');
			// allColors = [...allColors];
			// allColors = allColors.map(elem => elem.innerHTML.split(", ").join("/"));

			//get date
			// let allColors = document.querySelectorAll('tbody tr td:nth-of-type(4)');
			// allColors = [...allColors];
			// allColors = allColors.map(elem => elem.innerHTML);
			let allDates = document.querySelectorAll('tbody tr td:nth-of-type(2)');
			allDates = [...allDates];
			allDates = allDates.map(elem => elem.innerHTML);

			//get image
			// let allImages = document.querySelectorAll('.img-responsive');
			// allImages = [...allImages];
			// allImages = allImages.map(elem => elem.src)
			let allImages = document.querySelectorAll('tbody tr td:nth-of-type(1) a');
			allImages = [...allImages];
			allImages = allImages.map(elem => elem.href);
			allImages = allImages.map(
				elem =>
					'http://petharbor.com/get_image.asp?RES=Detail&' +
					elem.slice(elem.indexOf('?') + 1, elem.indexOf('&searchtype'))
			);

			//build result array
			let resultArray = [];
			for (let i = 1; i < allDates.length; i++) {
				//       austin
				// georgetown
				// killeen
				// harker heights
				// pflugerville

        let dogObj = {};
        let date = new Date(allDates[i]);
				dogObj['name'] = null;
				dogObj['sex'] = allGenders[i];
				dogObj['looksLike'] = allBreeds[i];
				dogObj['color'] = null;
				dogObj['date'] = date;
				dogObj['image'] = allImages[i];
				dogObj['status'] = 'Lost';
				dogObj['location'] = {
					city: allCities[i],
				};

				resultArray.push(dogObj);
			}
			resultArray = resultArray.slice(1);
			resultArray = resultArray.filter(dogObj => {
				return (
					dogObj.location.city !== undefined &&
					(dogObj.location.city.toLowerCase() === 'austin' ||
						dogObj.location.city.toLowerCase() === 'georgetown' ||
						dogObj.location.city.toLowerCase() === 'killeen' ||
						dogObj.location.city.toLowerCase() === 'harker heights' ||
						dogObj.location.city.toLowerCase() === 'pflugerville')
				);
			});
			return resultArray;
		})
		//end the Nightmare instance along with the Electron instance it wraps
		.end()
		//run the queue of commands specified, followed by logging the HREF
		.then(function(result) {
			db.uploadDogs(result, err => {
				if (err) console.error(err);
			});
		})
		//catch errors if they happen
		.catch(function(error) {
			console.error('an error has occurred: ' + error);
		});
};

module.exports = { getPHLostDogs };
