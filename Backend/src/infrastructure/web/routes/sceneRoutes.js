const express = require('express');
const sceneController = require('../../../controllers/SceneController');
const sceneValidator = require('../../../validators/sceneValidator');
const authMiddleware = require('../middlewares/authMiddleware');
const authorizeRole = require('../middlewares/authorizeRol');

const router = express.Router();

router.post(
    '/:scriptId',
    authMiddleware, 
    authorizeRole('guionista'), 
    sceneValidator.create, 
    sceneController.create
);
router.get(
    '/', 
    authMiddleware, 
    sceneController.getAll
);
router.get(
    '/:id',
    authMiddleware, 
    sceneController.getById
);
router.put(
    '/:id', 
    authMiddleware, 
    authorizeRole('guionista'),
    sceneValidator.update, 
    sceneController.update
);
router.delete(
    '/:id', 
    authMiddleware, 
    authorizeRole('guionista'),
    sceneController.delete
);

module.exports = router;
