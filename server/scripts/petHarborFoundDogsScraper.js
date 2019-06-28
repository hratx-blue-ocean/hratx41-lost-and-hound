//BASIC WEB SCRAPER FOR AUSTIN LOST PETS. SLOW. NOT FOR REAL TIME
const getPHFoundDogs = () => {
  const Nightmare = require("nightmare");
  const db = require("./../database");
  const nightmare = Nightmare({
    show: false
  });

  nightmare
    //load a url
    .goto(
      "http://petharbor.com/results.asp?searchtype=LOST&start=4&stylesheet=include/default.css&frontdoor=1&friends=1&samaritans=1&nosuccess=0&rows=492&imght=300&imgres=detail&tWidth=200&view=sysadm.v_animal&nomax=1&fontface=arial&fontsize=10&zip=78759&miles=50&shelterlist=%27ASTN%27,%27GRGT%27,%27KLEN%27,%27HHTX%27,%27PFLG%27&atype=dog&where=type_DOG&PAGE=1"
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
      let allNames = document.querySelectorAll(
        ".ResultsTable tbody tr td:nth-of-type(2)"
      );
      allNames = [...allNames];
      allNames = allNames.map(elem => elem.innerHTML);

      //get sex
      // let allGenders = document.querySelectorAll('.info h6:first-of-type');
      // allGenders = [...allGenders];
      // allGenders = allGenders.map(elem => elem.innerText.split(" ")[1]);
      let allGenders = document.querySelectorAll(
        ".ResultsTable tbody tr td:nth-of-type(3)"
      );
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
      let allAddresses = document.querySelectorAll(
        ".ResultsTable tbody tr td:nth-of-type(8)"
      );
      allAddresses = [...allAddresses];
      allAddresses = allAddresses.map(elem => elem.innerHTML);

      //get breed
      // let allBreeds = document.querySelectorAll('.custom li:first-of-type');
      // allBreeds = [...allBreeds];
      // allBreeds = allBreeds.map(elem => elem.innerHTML.trim());
      let allBreeds = document.querySelectorAll(
        ".ResultsTable tbody tr td:nth-of-type(5)"
      );
      allBreeds = [...allBreeds];
      allBreeds = allBreeds.map(elem => elem.innerHTML);

      //get color
      // let allColors = document.querySelectorAll('.custom li:nth-of-type(2)');
      // allColors = [...allColors];
      // allColors = allColors.map(elem => elem.innerHTML.split(", ").join("/"));
      let allColors = document.querySelectorAll(
        ".ResultsTable tbody tr td:nth-of-type(4)"
      );
      allColors = [...allColors];
      allColors = allColors.map(elem => elem.innerHTML);

      //get date
      // let allColors = document.querySelectorAll('tbody tr td:nth-of-type(4)');
      // allColors = [...allColors];
      // allColors = allColors.map(elem => elem.innerHTML);
      let allDates = document.querySelectorAll(
        ".ResultsTable tbody tr td:nth-of-type(7)"
      );
      allDates = [...allDates];
      allDates = allDates.map(elem => elem.innerHTML);

      //get image
      // let allImages = document.querySelectorAll('.img-responsive');
      // allImages = [...allImages];
      // allImages = allImages.map(elem => elem.src)
      let allImages = document.querySelectorAll(
        ".ResultsTable tbody tr td:nth-of-type(1) a"
      );
      allImages = [...allImages];
      allImages = allImages.map(elem => elem.href);
      allImages = allImages.map(
        elem =>
          "http://petharbor.com/get_image.asp?RES=Detail&" +
          elem.slice(elem.indexOf("?") + 1, elem.indexOf("&searchtype"))
      );

      //build result array
      let resultArray = [];
      for (let i = 0; i < allDates.length; i++) {
        //       Austin Animal Center = 78702
        // City of Georgetown Animal Shelter = 78626
        // City of Killeen Animal Services Unit = 76543
        // Harker Heights Pet Adoption Center = 76548
        // Pflugerville Animal Welfare Services = 78660
        let zip;
        if (allAddresses[i].includes("Austin Animal Center")) zip = "78702";
        else if (allAddresses[i].includes("City of Georgetown Animal Shelter"))
          zip = "78626";
        else if (
          allAddresses[i].includes("City of Killeen Animal Services Unit")
        )
          zip = "76543";
        else if (allAddresses[i].includes("Harker Heights Pet Adoption Center"))
          zip = "76548";
        else if (
          allAddresses[i].includes("Pflugerville Animal Welfare Services")
        )
          zip = "78660";

        let dogObj = {};
        let date = new Date(allDates[i]);
        dogObj["name"] = allNames[i];
        dogObj["sex"] = allGenders[i];
        dogObj["looksLike"] = allBreeds[i];
        dogObj["color"] = allColors[i];
        dogObj["date"] = date;
        dogObj["image"] = allImages[i];
        dogObj["status"] = "Found";
        dogObj["location"] = {
          address: allAddresses[i],
          zip
        };

        resultArray.push(dogObj);
      }

      resultArray = resultArray.slice(1);

      for (let i = 0; i < resultArray.length - 1; i++) {
        // resultArray[i].image = resultArray[i + 1].image;
        resultArray[i].name = resultArray[i + 1].name;
        resultArray[i].sex = resultArray[i + 1].sex;
        resultArray[i].looksLike = resultArray[i + 1].looksLike;
        resultArray[i].color = resultArray[i + 1].color;
        resultArray[i].status = resultArray[i + 1].status;
        resultArray[i].location = resultArray[i + 1].location;
      }
      resultArray.pop();

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
      console.error("an error has occurred: " + error);
    });
};

module.exports = { getPHFoundDogs };
