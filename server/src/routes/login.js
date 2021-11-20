const express = require('express');
const router = express.Router();

const loginController = require('../app/controller/loginControllers');
const { createUser, login } = require('../app/controller/loginControllers'); 

router.post('/user', createUser);
router.get('/', login);

module.exports = router;