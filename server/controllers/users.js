var mongoose = require('mongoose');
var User = mongoose.model('User');

function UsersController(){
	this.login = function(req, res){
    User.findOne({name: req.body.name}, function(err, user){
    	if(user){
    		res.json(user);
    	}else{
    		var user = User(req.body).save(function(err, user){
    			if(err){
                    res.json(err);
                }else{
                    res.json(user);
                }
    		})
    	}
    }) 
    };
    this.show = function(req, res){
        User.findOne({_id: req.params.id}, function(err, user){
            res.json(user);
        })
    }
    this.all = function(req, res){
        User.find({}, function(err, data){
            console.log('these are the users', data);
            res.json(data);
        })
    };
}

module.exports = new UsersController();