const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/auxilium_login",{
}).then(()=>{
    console.log('connection successful');
}).catch((e)=>{
    console.log("no connection");
})