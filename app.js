const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = 3001

app.use(express.json()); //enable json data in body part 
app.use(cors());



const userRoutes = require('./src/routes/UserRoutes');
const roleRoutes = require('./src/routes/RoleRoutes');
const productRoutes = require('./src/routes/ProductRoutes');
const uploadRoutes = require('./src/routes/UploadRoutes');
//app.use("/api",userRoutes);
app.use("/user",userRoutes);
app.use("/role",roleRoutes);
app.use("/product",productRoutes);
app.use("/upload",uploadRoutes);





mongoose.connect("mongodb://127.0.0.1:27017/mern24node").then(()=>{
    console.log('connected to db');
}).catch((err)=>{
    console.log('error:',err);
})



//server creation...
app.listen(PORT,()=>{
    console.log('server is running on port',PORT);
})

