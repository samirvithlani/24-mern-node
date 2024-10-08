const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3001

app.use(express.json()); //enable json data in body part 



const userRoutes = require('./src/routes/UserRoutes');
const roleRoutes = require('./src/routes/RoleRoutes');
const productRoutes = require('./src/routes/ProductRoutes');
//app.use("/api",userRoutes);
app.use("/user",userRoutes);
app.use("/role",roleRoutes);
app.use("/product",productRoutes);





mongoose.connect("mongodb://127.0.0.1:27017/mern24node").then(()=>{
    console.log('connected to db');
}).catch((err)=>{
    console.log('error:',err);
})



//server creation...
app.listen(PORT,()=>{
    console.log('server is running on port',PORT);
})

