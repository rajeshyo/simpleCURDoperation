var express = require ('express');
var bodyparser = require ('body-parser');
var mongoose = require ('mongoose');


var db= 'mongodb://test:r25071995@ds145895.mlab.com:45895/testing';
var port=3030;

var app = express();

mongoose.connect(db);

var abc = require('./router/tests');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended:true
}))

app.use('/test',abc);
app.get('/', (req,res)=>{
console.log('shdbfjskd');
});



app.listen(port, function(req, res){
console.log('server is running'+port);
});