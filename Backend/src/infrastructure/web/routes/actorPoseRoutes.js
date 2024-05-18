const express = require('express');
const actorPoseController = require('../../../controllers/ActorPoseController');
const actorPoseValidator = require('../../../validators/actorPoseValidator.js');

const router = express.Router();

router.post('/:sceneId', actorPoseValidator.create, actorPoseController.create); 
router.get('/', actorPoseController.getAll);
router.get('/:id', actorPoseController.getById);
router.put('/:id', actorPoseValidator.update, actorPoseController.update);
router.delete('/:id', actorPoseController.delete);

module.exports = router;
