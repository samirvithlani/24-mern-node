const router = require('express').Router();
const userController = require('../controllers/UserController');
const validatorMiddleware = require('../middleware/ValidatorMiddleware');

//router.get("/users",ayncc(_))
router.get("/users",userController.getAllUsers)
router.get("/user/:id",userController.getUserById)
//localhost:3001/user/adduser
router.post("/adduser",validatorMiddleware.userSchemaValidation,userController.addUser)
router.delete("/deleteuser/:id",userController.deleteUser)
router.put("/updateuser/:id",userController.updateUser)
router.delete("/deletebyage",userController.deleteByAge)
module.exports = router;
