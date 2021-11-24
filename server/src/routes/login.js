const express = require('express');
const router = express.Router();

const loginController = require('../app/controller/loginControllers');
const { createUser, login } = require('../app/controller/loginControllers'); 

router.post('/user', createUser);
router.post('/', login);

module.exports = router;