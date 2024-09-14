const roleSchema = require("../models/RoleModel");
const addRole = async (req, res) => {
  try {
    const savedRole = await roleSchema.create(req.body);
    res.status(201).json({
      message: "Role Added Successfully !!",
      data: savedRole,
    });
  } catch (err) {
    res.status(400).json({
      message: "Role Not Added !!",
      error: err.message,
    });
  }
};

const getRoles = async (req, res) => {
    const roles = await roleSchema.find();
    if (roles) {
        res.status(200).json({
        message: "data fetch Successfully !!",
        data: roles,
        });
    } else {
        res.json({
        message: "data not found !!",
        data: [],
        });
    }
}
module.exports = { addRole, getRoles };