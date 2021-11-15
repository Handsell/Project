const express = require('express');
const router = express.Router();

const bagController = require('../app/controller/bagControllers');

router.get('/:slug', bagController.show);
router.get('/', bagController.index);

module.exports = router;