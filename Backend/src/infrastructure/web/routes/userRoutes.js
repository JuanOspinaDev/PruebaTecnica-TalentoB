const express = require('express');
const UserController = require('../../../controllers/UserController');
const userValidator = require('../../../validators/userValidator');
const router = express.Router();

router.post('/register', userValidator.register, UserController.register);
router.post('/login', userValidator.login, UserController.login);

module.exports = router;
