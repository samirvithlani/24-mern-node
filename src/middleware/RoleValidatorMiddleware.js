const roleSchema = require("../models/RoleModel");

const roleValidator = async (req, res, next) => {

  const role = req.body.role; //"091981i01i19y1vhjds"

  if (role == undefined || role == "") {
    res.status(400).json({
      message: "Please provide role !!",
    });
  } else {
    const foundRole = await roleSchema.findById(role);
    console.log(foundRole);
    if (foundRole == null) {
      res.status(400).json({
        message: "Role not found !!",
      });
    } else {
      if (foundRole.name == "ADMIN" || foundRole.name == "admin") {
        next();
      } else {
        res.status(400).json({
          message: "You are not authorized !!",
        });
      }
    }

    //admin...
  }
};
module.exports = {
    roleValidator,
}
