var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ValentineSchema = new mongoose.Schema({
	_to: {type: Schema.Types.ObjectId, ref: 'User'},
	_from: {type: Schema.Types.ObjectId, ref: 'User'},
	message: {type: String, 
		required: [true, 'Message is required!'],
		minlength: [15, 'Message must be 15 characters or more!']},
	viewed: Boolean
}, {timestamps: true});

var Valentine = mongoose.model('Valentine', ValentineSchema);