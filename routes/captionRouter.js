const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const captionController = require('../controller/captionController');


router.get('/:id', captionController.getById);
router.post('/', auth, captionController.add);
router.put('/:id', auth, captionController.update);
router.delete('/:id', auth, captionController.delete);
module.exports = router