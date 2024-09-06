
const userSchema = require("../models/UserModel")

const getAllUsers = async(req,res)=>{


    const users = await userSchema.find()
    if(users){
        res.status(200).json({
            message:"data fetch Successfully !!",
            data:users
        })
    }
    else{
        res.json({
            message:"data not found !!",
            data:[]
        })
    }

}

//localhost:3000/user/user/id
const getUserById = async(req,res)=>{

    //fertch id from req.param object..
    const id = req.params.id;
    //const user = await userSchema.find({_id:id}) //array..[0th index]
    const user = await userSchema.findById(id)//object {}
    if(user){
        res.json({
            message:"data fetch Successfully !!",
            data:user
        })
    }
    else{
        res.json({
            message:"data not found !!",
            data:{}
        })
    }

}

module.exports = {
    getAllUsers,
    getUserById
}