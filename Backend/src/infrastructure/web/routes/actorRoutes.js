const express = require('express');
const ActorController = require('../../../controllers/ActorController');
const actorValidator = require('../../../validators/actorValidator');
const authMiddleware = require('../middlewares/authMiddleware');
const authorizeRole = require('../middlewares/authorizeRol');

const router = express.Router();

router.post(
    '/', 
    authMiddleware, 
    authorizeRole('guionista'),
    actorValidator.create, 
    ActorController.create
);
router.get(
    '/', 
    authMiddleware, 
    ActorController.getAll
);
router.get(
    '/:id',
    authMiddleware,  
    actorValidator.getById, 
    ActorController.getById
);
router.put(
    '/:id', 
    authMiddleware, 
    authorizeRole('guionista'),
    actorValidator.update, 
    ActorController.update
);
router.delete(
    '/:id', 
    authMiddleware, 
    authorizeRole('guionista'),
    actorValidator.getById, 
    ActorController.delete
);

module.exports = router;
