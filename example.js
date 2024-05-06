var exp=require('express');
var app=exp();
var path1=require('path');
var path2=path1.join(__dirname);
var buyer=require('C:/Users/ANIL/Desktop/CarHub/buyerdetails')

var store=require('C:/Users/ANIL/Desktop/CarHub/backup');
var body=require('body-parser');
var encoded=body.urlencoded({extended:false});
var logindetails=require("C:/Users/ANIL/Desktop/CarHub/loginbackup");
app.use(exp.static(path2));
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/firstpage.html');
})
app.post('/login',encoded,async(req,res)=>{
    var uname=req.body.fname;
    var pass=req.body.password;
    logindetails.findOne({fname:uname,password:pass})
    .then((s)=>{
        if(s){
            res.redirect('/in');
        }
        else{
            res.redirect('/wlogin');
        }
    })

})
app.get('/wlogin',(req,res)=>{
    res.sendFile(__dirname+'/wlogin.html');
})
app.get('/in',(req,res)=>{
    res.sendFile(__dirname+'/index123.html');
})
app.post('/signup',encoded,async(req,res)=>{
    var st=await logindetails(req.body);
    st.save()
    .then(()=>{
        res.redirect('/sregister');
    })
})
app.get('/sregister',(req,res)=>{
    res.sendFile(__dirname+'/sreg.html');
})
app.post('/sdetails',encoded,async(req,res)=>{
    var st=await store(req.body);
    st.save()
    .then(()=>{
        res.redirect('/sdetails');
    })
})
app.get('/sdetails',(req,res)=>{
    res.sendFile(__dirname+'/ssell.html');
});
app.post('/sbuyer',encoded,async(req,res)=>{
    var st=await buyer(req.body);
    st.save()
    .then(()=>{
        res.redirect('/shel');
    })
})
app.get('/shel',(req,res)=>{
    res.sendFile(__dirname+'/shel.html');
})
app.listen(3001);