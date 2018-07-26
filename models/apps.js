var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var APP = new Schema({
    
    teamName: String,
    
    
});

APP.plugin(passportLocalMongoose);

module.exports = mongoose.model('apps', APP);