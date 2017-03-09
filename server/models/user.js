var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
	name: {type: String, 
		required: [true, 'Name is required!']}
}, {timestamps: true});

var User = mongoose.model('User', UserSchema);