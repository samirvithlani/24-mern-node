const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000

const userSchema = require("./src/models/UserModel")
//userSchema === db.users

app.get("/users",async(req,res)=>{

    //db.users.find()
    const users = await userSchema.find()
    res.json({
        message:"success",
        data:users
    })

})




mongoose.connect("mongodb://127.0.0.1:27017/mern24node").then(()=>{
    console.log('connected to db');
}).catch((err)=>{
    console.log('error:',err);
})



//server creation...
app.listen(PORT,()=>{
    console.log('server is running on port',PORT);
})

