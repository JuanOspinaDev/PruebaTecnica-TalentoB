const express = require('express');
const dialogueController = require('../../../controllers/DialogueController');
const dialogueValidator = require('../../../validators/dialogueValidator');

const router = express.Router();

router.post('/:sceneId', dialogueValidator.create, dialogueController.create); 
router.get('/', dialogueController.getAll);
router.get('/:id', dialogueController.getById);
router.put('/:id', dialogueValidator.update, dialogueController.update);
router.delete('/:id', dialogueController.delete);

module.exports = router;
