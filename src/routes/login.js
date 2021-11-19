const express = require('express');
const router = express.Router();

const loginController = require('../app/controller/loginControllers');
const { createUser } = require('../app/controller/loginControllers'); 

router.post('/user', createUser);
router.get('/', loginController.login);

module.exports = router;