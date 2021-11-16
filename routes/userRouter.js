const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const userController = require('../controller/userController');


router.get('/', userController.list);
router.get('/:id', userController.getById);
router.post('/', userController.create);
router.post('/login', userController.login);
router.put('/:id', auth, userController.update);
router.delete('/:id', auth, userController.delete);
module.exports = router