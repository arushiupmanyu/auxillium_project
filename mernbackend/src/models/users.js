const mongoose=require("mongoose");
const personSchema=new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true,
        unique:true
    },
    Password:{
        type:String,
        required:true
    },
    ConfirmPassword:{
        type:String,
        required:true
    }
})
const Users = new mongoose.model("User",personSchema);
module.exports=Users;