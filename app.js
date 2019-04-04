var express = require ('express');
var bodyparser = require ('body-parser');
var mongoose = require ('mongoose');
//db string mlab path
var db= 'mongodb://test:r25071995@ds145895.mlab.com:45895/testing';
//server port nuber
var port = 9091;
//call express function
var app = express();
//connect mongodb database
mongoose.connect(db);

//this is middleware start
//import roter module
var abc = require('./router/tests');
//call the middleware bodyparser json()
app.use(bodyparser.json());
//call the middleware bodyparser urlencoded
app.use(bodyparser.urlencoded({
    extended:true
}));
//end middleware 

//cross origin start
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
      return res.status(200).json({});
    }
    next();
  });
//cross origin end

//this is route http://localhost:9091/testing 
//and pass the abc variable define in middleware import the router module
app.use('/testing',abc);

//this is test operation http://localhost:9091/
app.get('/', function(req,res){
res.send('work get operation');
});

//this is server watching the port
app.listen(port, function(req,res){
console.log('server is started'+port);
});