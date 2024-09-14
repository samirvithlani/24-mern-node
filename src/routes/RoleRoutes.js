const router = require('express').Router();
const roleController = require('../controllers/RoleController');
router.post('/addRole', roleController.addRole);
router.get('/getRoles', roleController.getRoles);
module.exports = router;