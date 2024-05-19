const express = require('express');
const dialogueController = require('../../../controllers/DialogueController');
const dialogueValidator = require('../../../validators/dialogueValidator');
const authMiddleware = require('../middlewares/authMiddleware');
const authorizeRole = require('../middlewares/authorizeRol');

const router = express.Router();

router.post(
    '/:sceneId', 
    authMiddleware, 
    authorizeRole('guionista'),
    dialogueValidator.create, 
    dialogueController.create
); 
router.get(
    '/', 
    authMiddleware, 
    dialogueController.getAll
);
router.get(
    '/:id',
    authMiddleware,  
    dialogueController.getById
);
router.put(
    '/:id', 
    authMiddleware, 
    authorizeRole('guionista'),
    dialogueValidator.update, 
    dialogueController.update
);
router.delete(
    '/:id', 
    authMiddleware, 
    authorizeRole('guionista'),
    dialogueController.delete
);

module.exports = router;
