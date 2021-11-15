const express = require('express');
const router = express.Router();

const siteController = require('../app/controller/siteControllers');

router.get('/search', siteController.search);
router.get('/', siteController.index);

module.exports = router;