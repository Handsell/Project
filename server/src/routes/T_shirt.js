const express = require('express');
const router = express.Router();

const T_shirtController = require('../app/controller/T_shirtControllers');

router.get('/:slug', T_shirtController.show);
router.get('/', T_shirtController.index);

module.exports = router;