const router = require('express').Router();

router.get('/dog/:id', (req, res) => {
	const mongoId = req.params.id;
	// retrieve data from mongo
	res.json(mongoId);
});

module.exports = router;
