const router = require("express").Router();
const { getLostDogs } = require("./../scripts/lost-my-doggie-scraper");

router.get("/", (req, res) => {
  getLostDogs((err, dogs) => {
    if (err) {
      res.sendStatus(err);
    }
    res.send(dogs);
  });
});

module.exports = router;
