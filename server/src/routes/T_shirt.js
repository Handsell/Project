const express = require('express');
const router = express.Router();

const T_shirtController = require('../app/controller/T_shirtControllers');



router.post("/create",T_shirtController.create);
router.put('/:id',T_shirtController.update);
router.delete('/:id',T_shirtController.delete);
router.get('/:id', T_shirtController.show_id);
router.get('/:slug', T_shirtController.show);
router.get('/', T_shirtController.index);

module.exports = router;