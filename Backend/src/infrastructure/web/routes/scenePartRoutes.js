const express = require('express');
const ScenePartController = require('../../../controllers/ScenePartController');
const scenePartValidator = require('../../../validators/scenePartValidator');

const router = express.Router();

router.post('/', scenePartValidator.create, ScenePartController.create);
router.get('/', ScenePartController.getAll);
router.get('/:id', scenePartValidator.getById, ScenePartController.getById);
router.put('/:id', scenePartValidator.update, ScenePartController.update);
router.delete('/:id', scenePartValidator.getById, ScenePartController.delete);

module.exports = router;
