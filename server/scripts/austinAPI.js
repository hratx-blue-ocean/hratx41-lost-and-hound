// let Nightmare = require('nightmare');

// let nightmare = Nightmare({
//   show: false
// });

// nightmare
//   //load a url
//   .goto('https://data.austintexas.gov/api/views/hye6-gvq2/rows.json?accessType=DOWNLOAD')
//   .evaluate(function () {
//     let allElems = document.querySelector('pre')
//     return allElems.innerHTML;
//   })
//   //end the Nightmare instance along with the Electron instance it wraps
//   .end()
//   .then(function (result) {

//     let animalArray = JSON.parse(result).data;
//     animalArray = [...animalArray];
//     animalArray = animalArray.filter((element) => element[9]);
//     animalArray = animalArray.filter((element) => element[9][0]);
//     animalArray = animalArray.filter((element) => element[12].toLowerCase() === "dog")

//     let lostDogs = []
//     animalArray.forEach(element => {
//       let address = JSON.parse(element[9][0]);
//       let date = element[11].split("T")[0];
//       let breed = element[13];
//       let color = element[14];
//       let gender = element[15].split(" ")[1];
//       let age = element[16];
//       let image = element[17][0];

//       lostDogs.push({ address, date, breed, color, gender, age, image })
//     });
//     console.log(lostDogs);
//   })
//   //catch errors if they happen
//   .catch(function (error) {
//     console.error('an error has occurred: ' + error);
//   });

const axios = require('axios');

const getAACFoundData = (searchParams, callback) => {
  // const reqParams = {
  //   '$$app_token': process.env.APP_TOKEN,
  //   '$limit': 5000,
  //   type: 'Dog',
  //   looks_like: searchParams.breed,
  //   color: searchParams.color,
  //   sex: searchParams.gender,
  // }
  axios.get('https://data.austintexas.gov/resource/kz4x-q9k5.json', { params: searchParams })
    .then(dogResults => {
      callback(null, dogResults.data);
    })
    .catch(err => {
      callback(err);
    });
}

module.exports = { getAACFoundData };