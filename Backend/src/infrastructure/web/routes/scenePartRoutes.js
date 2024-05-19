const express = require('express');
const ScenePartController = require('../../../controllers/ScenePartController');
const scenePartValidator = require('../../../validators/scenePartValidator');
const authMiddleware = require('../middlewares/authMiddleware');
const authorizeRole = require('../middlewares/authorizeRol');

const router = express.Router();

router.post(
    '/', 
    authMiddleware, 
    authorizeRole('guionista'),
    scenePartValidator.create, 
    ScenePartController.create
);
router.get(
    '/', 
    authMiddleware, 
    ScenePartController.getAll
);
router.get(
    '/:id', 
    authMiddleware, 
    scenePartValidator.getById, 
    ScenePartController.getById
);
router.put(
    '/:id',
    authMiddleware, 
    authorizeRole('guionista'), 
    scenePartValidator.update, 
    ScenePartController.update
);
router.delete(
    '/:id', 
    authMiddleware, 
    authorizeRole('guionista'),
    scenePartValidator.getById, 
    ScenePartController.delete
);

module.exports = router;
