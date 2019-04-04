var mongoose = require ('mongoose');
var Schema =  mongoose.Schema;
var testingschema = new Schema({
title:String,
dec:String
});

module.exports = mongoose.model('test',testingschema);