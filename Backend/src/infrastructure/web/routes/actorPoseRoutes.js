const express = require('express');
const actorPoseController = require('../../../controllers/ActorPoseController');
const actorPoseValidator = require('../../../validators/actorPoseValidator.js');
const authMiddleware = require('../middlewares/authMiddleware');
const authorizeRole = require('../middlewares/authorizeRol');

const router = express.Router();

router.post(
    '/:scriptId',
    authMiddleware, 
    authorizeRole('guionista'),
    actorPoseValidator.create, 
    actorPoseController.create
); 
router.get(
    '/', 
    authMiddleware, 
    actorPoseController.getAll
);
router.get(
    '/:id', 
    authMiddleware, 
    actorPoseController.getById
);
router.put(
    '/:id/:scriptId', 
    authMiddleware, 
    authorizeRole('guionista'),
    actorPoseValidator.update, 
    actorPoseController.update
);
router.delete(
    '/:id/:scriptId', 
    authMiddleware, 
    authorizeRole('guionista'),
    actorPoseController.delete
);

module.exports = router;
