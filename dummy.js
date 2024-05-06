var exp=require('express');
var app=exp();
var body=require('body-parser');
var encoded=body.urlencoded({extended:false});
app.get('/',(req,res)=>{

    res.sendFile(__dirname+'/sell.html');
})
app.post('/sdetails',encoded,(req,res)=>{
    var d=req.body.sel;
    console.log(d);
})