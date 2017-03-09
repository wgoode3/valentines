var mongoose = require('mongoose');
var Valentine = mongoose.model('Valentine');

function ValentinesController(){
	this.to = function(req, res){
        Valentine.find({_to: req.params.id}).populate('_from').exec(function(err, data){
            if(err){
                res.json(err);
            }else{
                res.json(data);
            }
        })
    };
    this.from = function(req, res){
        Valentine.find({_from: req.params.id}).populate('_to').exec(function(err, data){
            if(err){
                res.json(err);
            }else{
                res.json(data);
            }
        })
    };
    this.create = function(req, res){
        var valentine = new Valentine(req.body);
        valentine.viewed = false;
        console.log('valentine to save is', valentine);
        valentine.save(function(err, data){
            if(err){
                res.json(err);
            }else{
                res.json(data);
            }
        })
    };
    this.show = function(req, res){
        Valentine.findOne({_id: req.params.id}).populate('_from').exec(function(err, valentine){
            if(err){
                res.json(err);
            }else{
                res.json(valentine);
            }
        })
    };
}

module.exports = new ValentinesController();