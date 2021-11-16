const express = require('express');
const router = express.Router();

const photoController = require('../controller/photoController');


router.get('/', photoController.list);
router.get('/:id', photoController.getById);
router.post('/', photoController.add);
router.put('/:id', photoController.update);
router.delete('/:id', photoController.delete);
module.exports = router