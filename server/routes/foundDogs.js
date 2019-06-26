const router = require("express").Router();
const { allFoundDogs } = require('./../database');

router.get("/", (req, res) => {
  const foundDogParams = req.query;
  if (!foundDogParams) {
    res.sendStatus(500);
  } else {
    allFoundDogs((err, dogs) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.status(200).json(dogs)
      }
    })
  }
});

module.exports = router;
