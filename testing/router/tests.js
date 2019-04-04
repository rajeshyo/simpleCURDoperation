var express = require ('express');
var test= require('../modul/test');
var app= express.Router()

app.get('/', function(req, res){
test.find({}).exec(function(err, test){
 if(err)
 {
     res.send('error is occure');
 }else{
     res.json(test);
 }
});
});


app.get('/:id', function(req, res){
    test.findOne({_id: req.params.id}).exec(function(err, test){
     if(err)
     {
         res.send('error is occure');
     }else{
         res.json(test);
     }
    });
    });

app.post('/',(req,res)=>{
var testing = new test();
testing.title = req.body.title,
testing.dec = req.body.dec
testing.save(function(err,test){
    if(err)
 {
     res.send('error is occure');
 }else{
     res.json(test);
 }
});
});


app.delete('/:id', function(req, res){
    test.findByIdAndRemove({_id: req.params.id}).exec(function(err, test){
     if(err)
     {
         res.send('error is occure');
     }else{
         res.json(test);
     }
    });
    });
app.put('/:id', (req,res)=>{
test.findByIdAndUpdate({_id: req.params.id},
    {
        $set:{
            title: req.body.title,
            dec: req.body.dec
        }
    },
    {
        $upsert:true
    },
    function(err, test){
        if(err)
        {
            res.send('error is occure');
        }else{
            res.json(test);
        }
    
    });
});
module.exports= app;