const express = require('express');
const sceneController = require('../../../controllers/SceneController');
const sceneValidator = require('../../../validators/sceneValidator');

const router = express.Router();

router.post('/:scriptId', sceneValidator.create, sceneController.create);
router.get('/', sceneController.getAll);
router.get('/:id', sceneController.getById);
router.put('/:id', sceneValidator.update, sceneController.update);
router.delete('/:id', sceneController.delete);

module.exports = router;
