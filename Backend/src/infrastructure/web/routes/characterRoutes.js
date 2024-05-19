const express = require('express');
const CharacterController = require('../../../controllers/CharacterController');
const characterValidator = require('../../../validators/characterValidator');

const router = express.Router();

router.post('/', characterValidator.create, CharacterController.create);
router.get('/', CharacterController.getAll);
router.get('/:id', characterValidator.getById, CharacterController.getById);
router.put('/:id', characterValidator.update, CharacterController.update);
router.delete('/:id', characterValidator.getById, CharacterController.delete);

module.exports = router;
