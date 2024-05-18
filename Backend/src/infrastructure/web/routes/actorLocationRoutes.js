const express = require('express');
const actorLocationController = require('../../../controllers/ActorLocationController');
const actorLocationValidator = require('../../../validators/actorLocationValidator');

const router = express.Router();

router.post('/:sceneId', actorLocationValidator.create, actorLocationController.create);
router.get('/', actorLocationController.getAll);
router.get('/:id', actorLocationController.getById);
router.put('/:id', actorLocationValidator.update, actorLocationController.update);
router.delete('/:id', actorLocationController.delete);

module.exports = router;
