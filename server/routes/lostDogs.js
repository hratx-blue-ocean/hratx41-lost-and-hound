const router = require("express").Router();
const db = require('./../database');

router.get("/", (req, res) => {
  const lostDogParams = req.query;
  if (!lostDogParams) {
    res.sendStatus(500);
  } else {
    db.allLostDogs((err, dogs) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.status(200).json(dogs)
      }
    })
  }
});

module.exports = router;
