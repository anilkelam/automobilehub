const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/anil')
.then(()=>{
    console.log("connection successfull");
})
.catch((err)=>{
    console.log("connection failed");
})
var struct=mongoose.Schema({
    fname:{
        type:String,
        required:true,
        trim:true
    },
    email:{
  type:String,
  required:true,
  trim:true
    },
    
    password:{
type:String,
required:true,
trim:true
    }
})
var student=mongoose.model("lo",struct);
module.exports=student;