const createError = require('http-errors');
const logger = require('morgan');
const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const compression = require('compression');
// app.set("view engine", "html");
//commment test
// open up CORS
app.use(cors());
app.use(compression());
app.use(logger('dev'));

// You can place your routes here, feel free to refactor:
const { foundDogs, lostDogs, flyer, dog } = require('./routes');
app.use(express.static(path.join(__dirname, '../client/public')));
app.get('/flyer', (req, res) => {
	res.sendFile(path.join(__dirname, '../client/public/index.html'), function(err) {
		if (err) {
			console.log(err);
			res.status(500).send(err);
		}
	});
});
app.use('/api/found', foundDogs);
app.use('/api/lost', lostDogs);
app.use('/api/dog', flyer);
app.use('/api/dog', bodyParser.json(), dog);
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
	res.locals.error = req.app.get('env') === 'development' ? err : {};
	// render the error page
	res.status(err.status || 500);
	// res.render("error");
});

module.exports = app;
