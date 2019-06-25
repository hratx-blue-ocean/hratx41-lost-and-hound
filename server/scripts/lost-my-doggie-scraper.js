//BASIC WEB SCRAPER FOR AUSTIN LOST PETS. SLOW. NOT FOR REAL TIME

var Nightmare = require('nightmare'),
  nightmare = Nightmare({
    show: false
  });

nightmare
  //load a url
  .goto('https://www.lostmydoggie.com/missing-pets.cfm?petkindid=1&alerttypeid=1&zipcode=78704&radius=50')
  //simulate typing into an element identified by a CSS selector
  //here, Nightmare is typing into the search bar
  //.type('#uh-search-box', 'github nightmare')
  //click an element identified by a CSS selector
  //in this case, click the search button
  //.click('#uh-search-button')

  //wait 10 seconds to ensure page loads. HACKY
  //execute javascript on the page
  //here, the function is getting the HREF of the first search result
  .evaluate(function () {
    //get names
    let allNames = document.querySelectorAll('.info h4');
    allNames = [...allNames];
    allNames = allNames.map(elem => elem.innerHTML);

    //get sex
    let allGenders = document.querySelectorAll('.info h6:first-of-type');
    allGenders = [...allGenders];
    allGenders = allGenders.map(elem => elem.innerText.split(" ")[1]);

    //get address
    let allAdresses = document.querySelectorAll('.info h6:nth-of-type(2)');
    allAdresses = [...allAdresses];
    allAdresses = allAdresses.map(elem => {
      let address = elem.innerText;
      let zip = address.split("\n")[1];
      let city = address.split(",")[0];
      return {
        zip,
        city,
        state: "TX",
      }
    });

    //get breed
    let allBreeds = document.querySelectorAll('.custom li:first-of-type');
    allBreeds = [...allBreeds];
    allBreeds = allBreeds.map(elem => elem.innerHTML.trim());


    //get color
    let allColors = document.querySelectorAll('.custom li:nth-of-type(2)');
    allColors = [...allColors];
    allColors = allColors.map(elem => elem.innerHTML.split(", ").join("/"));

    //get date
    let allDates = document.querySelectorAll('.custom li:nth-of-type(3)');
    allDates = [...allDates];
    allDates = allDates.map(elem => elem.innerHTML.split(":")[1].trim());

    //get image
    let allImages = document.querySelectorAll('.img-responsive');
    allImages = [...allImages];
    allImages = allImages.map(elem => elem.src)


    //build result array
    let resultArray = []
    for (let i = 0; i < allDates.length; i++) {
      let dogObj = {};
      dogObj["name"] = allNames[i];
      dogObj["gender"] = allGenders[i];
      dogObj["address"] = allAdresses[i];
      dogObj["breed"] = allBreeds[i];
      dogObj["color"] = allColors[i];
      dogObj["date"] = allDates[i];
      dogObj["image"] = allImages[i];

      resultArray.push(dogObj);
    }

    return resultArray;
  })
  //end the Nightmare instance along with the Electron instance it wraps
  .end()
  //run the queue of commands specified, followed by logging the HREF
  .then(function (result) {
    console.log(result);
  })
  //catch errors if they happen
  .catch(function (error) {
    console.error('an error has occurred: ' + error);
  });