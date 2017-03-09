console.log('my routes');

var users = require('../controllers/users.js');
var valentines = require('../controllers/valentines.js');

module.exports = function(app){
  	

	// handle saving or logging in a user
	app.post('/users', users.login);

	// handle getting a specific user's data
	app.get('/users/:id', users.show);

	// show all users the user hasn't sent a valentine to
	app.get('/users', users.all);

	// handle creating a valentine
	app.post('/valentines', valentines.create);

	// show all valentines for a given user
	app.get('/valentines/to/:id', valentines.to);

	// show all valentines from a given user
	app.get('/valentines/from/:id', valentines.from);

	// show a specific valentine
	app.get('/valentines/:id', valentines.show);

}