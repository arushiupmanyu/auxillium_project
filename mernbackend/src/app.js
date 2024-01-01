const express=require("express");
const path=require("path");
const app=express();

require("./db/conn");
const User = require("./models/users");
const {json}=require("express");

const port=process.env.PORT || 3000;

const static_path=path.join(__dirname,"../public");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));
app.get("/",(req,res)=>{
    res.send("hello from auxilium")
});
app.get("/",(req,res)=>{
    res.render("index");
});

app.post("/User",async(req,res)=>{
    try {
        const Password=req.body.Password;
        const ConfirmPassword=req.body.ConfirmPassword;
        if(Password===ConfirmPassword){
            const signedUp=new User({
                Name:req.body.Name,
                Email:req.body.Email,
                Password:Password,
                ConfirmPassword:ConfirmPassword
            })
            const registered=await signedUp.save();
            res.status(201).render("index");
        }else{
            res.send("passwords are not same");
        }
        //console.log(req.body.Name);
        //res.send(req.body.Name);
    } catch (error) {
        res.status(400).send(error);
    }
})
app.listen(port,()=>{
    console.log("Server is running");
})