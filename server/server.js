const createError = require("http-errors");
const logger = require("morgan");
const express = require("express");
const path = require("path");
const cors = require("cors");
const { getAACFoundData } = require("./scripts/austinAPI")
const app = express();

// app.set("view engine", "html");
//commment test
// open up CORS

app.use(cors());

app.use(logger("dev"));

app.use(function(req, res, next) {
  setInterval(getAACFoundData, 1800000);
  next();
})
// You can place your routes here, feel free to refactor:
const { foundDogs, lostDogs } = require("./routes");
app.use(express.static(path.join(__dirname, "../client/public")));
app.get("/flyer", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/public/index.html"), function(
    err
  ) {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    }
  });
});
app.use("/api/found", foundDogs);
app.use("/api/lost", lostDogs);

// app.get("/", (req, res) => {
//   res.send("HELLO");
// });
// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  // render the error page
  res.status(err.status || 500);
  // res.render("error");
});

function intervalDogs() {
  setInterval(getLostDogs, 3600000);
}

function getLostDogs() {
  var Nightmare = require("nightmare");

  let nightmare = Nightmare({
    show: false
  });

  nightmare
    //load a url
    .goto(
      "https://www.lostmydoggie.com/missing-pets.cfm?petkindid=1&alerttypeid=1&zipcode=78704&radius=50"
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
      let allNames = document.querySelectorAll(".info h4");
      allNames = [...allNames];
      allNames = allNames.map(elem => elem.innerHTML);

      //get sex
      let allGenders = document.querySelectorAll(".info h6:first-of-type");
      allGenders = [...allGenders];
      allGenders = allGenders.map(elem => elem.innerText.split(" ")[1]);

      //get address
      let allAdresses = document.querySelectorAll(".info h6:nth-of-type(2)");
      allAdresses = [...allAdresses];
      allAdresses = allAdresses.map(elem => {
        let address = elem.innerText;
        let zip = address.split("\n")[1];
        let city = address.split(",")[0];
        return {
          zip,
          city,
          state: "TX"
        };
      });

      //get breed
      let allBreeds = document.querySelectorAll(".custom li:first-of-type");
      allBreeds = [...allBreeds];
      allBreeds = allBreeds.map(elem => elem.innerHTML.trim());

      //get color
      let allColors = document.querySelectorAll(".custom li:nth-of-type(2)");
      allColors = [...allColors];
      allColors = allColors.map(elem => elem.innerHTML.split(", ").join("/"));

      //get date
      let allDates = document.querySelectorAll(".custom li:nth-of-type(3)");
      allDates = [...allDates];
      allDates = allDates.map(elem => elem.innerHTML.split(":")[1].trim());

      //get image
      let allImages = document.querySelectorAll(".img-responsive");
      allImages = [...allImages];
      allImages = allImages.map(elem => elem.src);

      //build result array
      let resultArray = [];
      for (let i = 0; i < allDates.length; i++) {
        let dogObj = {};
        dogObj["name"] = allNames[i];
        dogObj["sex"] = allGenders[i];
        dogObj["address"] = allAdresses[i];
        dogObj["looks_like"] = allBreeds[i];
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
    .then(function(result) {
      console.log(result);
    })
    //catch errors if they happen
    .catch(function(error) {
      console.error("an error has occurred: " + error);
    });
}

intervalDogs();

module.exports = app;
