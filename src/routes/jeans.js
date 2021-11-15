const express = require('express');
const router = express.Router();

const jeansController = require('../app/controller/jeansControllers');

router.get('/:slug', jeansController.show);
router.get('/', jeansController.index);

module.exports = router;