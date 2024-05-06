var mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/anil")
.then(()=>{
    console.log("Connected");
})
.catch((err)=>{
    console.log("Failed to connect");
})
var sch=mongoose.Schema({
    carmake:{
        type:String,
        required:true,
        trim:true
    },
    carmodel:{
        type:String,
        required:true,
        trim:true
    },
    caryear:{
        type:Number,
        required:true,
        trim:true
    }
    ,askingprice:{
        type:Number,
        required:true,
        trim:true
    },
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    }
})
var details=mongoose.model("details",sch);
module.exports=details;