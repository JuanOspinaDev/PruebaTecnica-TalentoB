const express = require('express');
const ActorController = require('../../../controllers/ActorController');
const actorValidator = require('../../../validators/actorValidator');

const router = express.Router();

router.post('/', actorValidator.create, ActorController.create);
router.get('/', ActorController.getAll);
router.get('/:id', actorValidator.getById, ActorController.getById);
router.put('/:id', actorValidator.update, ActorController.update);
router.delete('/:id', actorValidator.getById, ActorController.delete);

module.exports = router;
