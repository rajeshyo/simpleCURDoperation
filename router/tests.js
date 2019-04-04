var express = require ('express');
//import the model schema
var test = require('../modal/test');
//import router()
var app = express.Router();

//   This is get operation
app.get('/', (req, res)=>{
test.find({})
//this function work in only for validation purpose
.exec(function(err, test){
    // if it is error through the error
 if(err)
 {
     res.send('error is occure');
 }
 // and if it is false then pass the data (store in test variable with json formate) 
 else{
     res.json(test);
 }
});
});


// This is get operation (finding the data id wise)
app.get('/:id', function(req,res){
test.findOne({
    //(_id means databse _id) and send a request params with ths (id means router /:id) 
    // make sure u type params not param
    _id: req.params.id
}).exec(function(err, test){
 if(err){
     res.send('error is occure');
 }else{
     res.json(test);
 }
});
});

//     End Get operation

//    Delete operation

app.delete('/:id', function(req,res){
    test.findByIdAndRemove({
        _id: req.params.id
    }).exec(function(err, test){
     if(err){
         res.send('error is occure');
     }else{
         res.json(test);
     }
    });
    });

//  End Delete operation

// Start Post operation
app.post('/', function(req,res){
var testing = new test();
testing.title = req.body.title;
testing.dec = req.body.dec;
testing.save(function(err,test){
    if(err) {
        res.send('err');
    }else{
        res.send(test);
    }
});
});

//  End post operation

//  Start put operation
app.put('/:id', function(req,res){
test.findOneAndUpdate({
    _id: req.params.id
},{
    $set:{
        title: req.body.title,
        dec: req.body.dec
    }
},
{
    $upsert:true
},function(err, test){
    if(err)
    {
        res.send("error occure");
    }else{
        res.send(test);
    }
});


});
// End put operation

// export the router module 
// (router module name is app)
module.exports = app;



//  NOTE all the validation same 
// this is the code 
// function(err, test){
//     if(err)
//     {
//         res.send('err occure');
//     }else{
//         res.send(test);
//     }
// }