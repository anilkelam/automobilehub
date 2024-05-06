var mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/anil")
.then(()=>{
    console.log("connected")
})
.catch((err)=>{
    console.log('no');
})
var sch=mongoose.Schema({
    Bname:{
        
        trim:true,
        type:String,
        required:true
    },
    Bemail:{
        
        trim:true,
        type:String,
        required:true
    },
    Badd:{
        required:true,
        trim:true,
       type:String
    }
})
var log=mongoose.model("buyer1",sch);
module.exports=log;