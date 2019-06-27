const router = require("express").Router();
const db = require("./../database");

router.get("/", (req, res) => {
  const foundDogQuery = req.query;
  if (!foundDogQuery) {
    res.sendStatus(500);
  } else {
    db.oneDog(foundDogQuery.id, (err, dog) => {
      if (err) {
        res.send(err);
      } else {
        res.send(dog);
      }
    });
    // res.send(req.query);
  }
});

module.exports = router;
