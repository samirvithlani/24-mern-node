const userSchema = require("../models/UserModel");

const getAllUsers = async (req, res) => {
  const users = await userSchema.find().populate("role");
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
  try {
    const savedUser = await userSchema.create(req.body);
    //res.send("Add User API")
    res.status(201).json({
      message: "User Added Successfully !!",
      data: savedUser,
    });
  } catch (err) {
    res.status(400).json({
      message: "User Not Added !!",
      error:err.message
    });
  }
};

const deleteUser = async (req, res) => {
  //get id from req.params object...
  const id = req.params.id;
  const deletedUser = await userSchema.findByIdAndDelete(id);
  console.log("deleted user...", deletedUser);

  if (deletedUser === null) {
    res.status(404).json({
      message: "User Not Found !!",
      data: {},
    });
  } else {
    res.status(200).json({
      message: "User Deleted Successfully !!",
      data: deletedUser,
    });
  }
};

const updateUser = async (req, res) => {
  //update user set name=?,email=? where id=?
  //id -->req.params.id
  //name,email -->req.body

  const id = req.params.id;
  const dataToUpdate = req.body;
  //console.log("data to update...", dataToUpdate);

  const updatedUser = await userSchema.findByIdAndUpdate(id, dataToUpdate, {
    new: true,
  });
  if (updatedUser || updatedUser != null) {
    res.status(200).json({
      message: "User Updated Successfully !!",
      data: updatedUser,
    });
  } else {
    res.status(404).json({
      message: "User Not Found !!",
      data: {},
    });
  }
  //console.log("updated user...", updatedUser);
  // res.status(200).json({
  //   message: "User Updated Successfully !!",
  //   data: updatedUser,
  // });
};

const deleteByAge = async (req, res) => {
  const age = req.query.age;
  const deletedUsers = await userSchema.deleteMany({ age: { $gte: age } });
  console.log("deleted users...", deletedUsers);
  if (deletedUsers.deletedCount > 0) {
    res.status(200).json({
      message: "Users Deleted Successfully !!",
      data: deletedUsers,
    });
  } else {
    res.status(404).json({
      message: "Users Not Found !!",
      data: {},
    });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  addUser,
  deleteUser,
  updateUser,
  deleteByAge,
};
