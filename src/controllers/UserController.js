const userSchema = require("../models/UserModel");

const getAllUsers = async (req, res) => {
  const users = await userSchema.find();
  if (users) {
    res.status(200).json({
      message: "data fetch Successfully !!",
      data: users,
    });
  } else {
    res.json({
      message: "data not found !!",
      data: [],
    });
  }
};

//localhost:3000/user/user/id
const getUserById = async (req, res) => {
  //fertch id from req.param object..
  const id = req.params.id;
  //const user = await userSchema.find({_id:id}) //array..[0th index]
  const user = await userSchema.findById(id); //object {}
  if (user) {
    res.json({
      message: "data fetch Successfully !!",
      data: user,
    });
  } else {
    res.json({
      message: "data not found !!",
      data: {},
    });
  }
};

const addUser = async (req, res) => {
  //logic..

  console.log("request body...", req.body);
  //userSchema.insert(req.body)
  const savedUser = await userSchema.create(req.body);
  //res.send("Add User API")
  res.status(201).json({
    message: "User Added Successfully !!",
    data: savedUser,
  });
};

module.exports = {
  getAllUsers,
  getUserById,
  addUser,
};
