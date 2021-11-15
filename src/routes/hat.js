const express = require('express');
const router = express.Router();

const hatController = require('../app/controller/hatControllers');

router.get('/:slug', hatController.show);
router.get('/', hatController.index);

module.exports = router;