const express = require('express');
const router = express.Router();

const shortController = require('../app/controller/shortControllers');

router.get('/:slug', shortController.show);
router.get('/', shortController.index);

module.exports = router;