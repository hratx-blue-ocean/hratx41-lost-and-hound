const router = require('express').Router();
const { getAACFoundData } = require('./../scripts/austinAPI')

router.get('/', (req, res) => {
  const foundDogParams = req.query;
  if (!foundDogParams) {
    res.sendStatus(500);
  } else {
    getAACFoundData(foundDogParams, (err, dogs) => {
      res.status(200).json(dogs)
    })
  }
})

module.exports = router;