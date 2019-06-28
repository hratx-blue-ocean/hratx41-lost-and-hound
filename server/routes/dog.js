const router = require('express').Router();
const db = require('./../database')

router.post('/', (req, res) => {
  const newDog = req.body
  if (!newDog) {
    res.sendStatus(500);
  } else {
    db.insertDog(newDog, (err) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.sendStatus(200);
      }
    })
  }
	// retrieve data from mongo
});

module.exports = router;
