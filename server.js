
const express = require("express")
const mongoose =require("mongoose")
const path =require("path")
const port = 3000


const app =  express();

app.use(express.static(__dirname))

app.use(express.urlencoded({extended : true}))

// mongoose.connect("mongodb://127.0.0.1:27017/students")

mongoose.connect("mongodb+srv://andytst2005:B11cFuru9j0f47qt@cluster0.rqgds42.mongodb.net/crud")


const db = mongoose.connection

db.once("open",()=>{
    console.log("mongodb connection successful")
})


const userSchema = new mongoose.Schema({
    firstname:String,
    lastname:String,
    companyname:String,
    email:String,
    phone:String,
    option:String,
    delivery:Date,
    comment:String,
    item_090:String,
    item_001:String,
    item_002:String,
    item_003:String,
    item_004:String,
    item_005:String,
    item_006:String,
    item_007:String,
    item_008:String,
    item_009:String,
    item_010:String,
    item_011:String,
    item_012:String,
    item_013:String,
    item_014:String,
    item_015:String,
    item_016:String,
    item_017:String,
    item_018:String
  
  


})


const Users = mongoose.model("data", userSchema)

app.post("/", async(req,res)=>{
     const {
        firstname,
        lastname,
        companyname,
        email,
        phone,
        option,
        delivery,
        comment,
        item_090,
        item_001,
        item_002,
        item_003,
        item_004,
        item_005,
        item_006,
        item_007,
        item_008,
        item_009,
        item_010,
        item_011,
        item_012,
        item_013,
        item_015,
        item_016,
        item_017,
        item_018
     } =req.body

    const user = new Users ({
        firstname,
        lastname,
        companyname,
        email,
        phone,
        option,
        delivery,
        comment,
        item_090,
        item_001,
        item_002,
        item_003,
        item_004,
        item_005,
        item_006,
        item_007,
        item_008,
        item_009,
        item_010,
        item_011,
        item_012,
        item_013,
        item_015,
        item_016,
        item_017,
        item_018
    
    })
    

    await user.save()

    console.log(user)

     res.setHeader("./", "https://andy6818.github.io/accessories/");
    
  
    

})




app.get("./",(req,res)=>
{   res.sendFile(path.join(__dirname,"andy.html",
               ))
   console.log("you have send the file to localhost:3000")
   
  
})



app.listen(port,()=>{
 console.log("server started")
})



