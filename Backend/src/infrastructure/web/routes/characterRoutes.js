const express = require('express');
const CharacterController = require('../../../controllers/CharacterController');
const characterValidator = require('../../../validators/characterValidator');
const authMiddleware = require('../middlewares/authMiddleware');
const authorizeRole = require('../middlewares/authorizeRol');

const router = express.Router();

router.post(
    '/scriptId', 
    authMiddleware, 
    authorizeRole('guionista'),
    characterValidator.create, 
    CharacterController.create
);
router.get(
    '/', 
    authMiddleware, 
    CharacterController.getAll
);
router.get(
    '/:id', 
    authMiddleware, 
    characterValidator.getById, 
    CharacterController.getById
);
router.put(
    '/:id/:scriptId', 
    authMiddleware, 
    authorizeRole('guionista'),
    characterValidator.update, 
    CharacterController.update
);
router.delete(
    '/:id/:scriptId', 
    authMiddleware, 
    authorizeRole('guionista'),
    characterValidator.getById, 
    CharacterController.delete
);

module.exports = router;
