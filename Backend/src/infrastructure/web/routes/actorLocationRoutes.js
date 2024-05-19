const express = require('express');
const actorLocationController = require('../../../controllers/ActorLocationController');
const actorLocationValidator = require('../../../validators/actorLocationValidator');
const authMiddleware = require('../middlewares/authMiddleware');
const authorizeRole = require('../middlewares/authorizeRol');

const router = express.Router();

router.post(
    '/:scriptId',
    authMiddleware, 
    authorizeRole('guionista'),   
    actorLocationValidator.create, 
    actorLocationController.create
);
router.get(
    '/',
    authMiddleware, 
    actorLocationController.getAll
);
router.get(
    '/:id',
    authMiddleware, 
    actorLocationController.getById
);
router.put(
    '/:id/:scriptId', 
    authMiddleware, 
    authorizeRole('guionista'),  
    actorLocationValidator.update, 
    actorLocationController.update
);
router.delete(
    '/:id/:scriptId', 
    authMiddleware, 
    authorizeRole('guionista'), 
    actorLocationController.delete
);

module.exports = router;
