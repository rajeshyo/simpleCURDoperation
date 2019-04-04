var mongoose = require ('mongoose');
//this is Schema define in mongoose
var Schema = mongoose.Schema;
//heare creating one schema and pass the parameter with type also u can pass the required for validation purpose
var testschema = new Schema({
title:String,
dec:String
});


//heare u just export the schema module 
// 'test' is a database table name (Schema) 
module.exports = mongoose.model('test',testschema)