let Nightmare = require('nightmare');

let nightmare = Nightmare({
  show: false
});

nightmare
  //load a url
  .goto('https://data.austintexas.gov/api/views/hye6-gvq2/rows.json?accessType=DOWNLOAD')
  .evaluate(function () {
    let allElems = document.querySelector('pre')
    return allElems.innerHTML;
  })
  //end the Nightmare instance along with the Electron instance it wraps
  .end()
  .then(function (result) {

    let animalArray = JSON.parse(result).data;
    animalArray = [...animalArray];
    animalArray = animalArray.filter((element) => element[9]);
    animalArray = animalArray.filter((element) => element[9][0]);
    animalArray = animalArray.filter((element) => element[12].toLowerCase() === "dog")

    let lostDogs = []
    animalArray.forEach(element => {
      let address = JSON.parse(element[9][0]);
      let date = element[11];
      let breed = element[13];
      let color = element[14];
      let sex = element[15];
      let age = element[16];
      let image = element[17][0];

      lostDogs.push({ address, date, breed, color, sex, age, image })
    });
    console.log(lostDogs);
  })
  //catch errors if they happen
  .catch(function (error) {
    console.error('an error has occurred: ' + error);
  });