const express = require('express');
const router = express.Router();

const T_shirtController = require('../app/controller/T_shirtControllers');
const {createT_shirt, update} = require('../app/controller/productControllers');


router.post("/create",createT_shirt);
router.put('/:id',T_shirtController.update);
router.get('/:id', T_shirtController.show_id);
router.get('/:slug', T_shirtController.show);
router.get('/', T_shirtController.index);

module.exports = router;