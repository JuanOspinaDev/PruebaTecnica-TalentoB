const express = require('express');
const scriptController = require('../../../controllers/ScriptController');
const scriptValidator = require('../../../validators/scriptValidator');

const router = express.Router();

router.post('/', scriptValidator.create, scriptController.create);
router.get('/', scriptController.getAll);
router.get('/:id', scriptController.getById);
router.put('/:id', scriptValidator.update, scriptController.update);
router.delete('/:id', scriptController.delete);

module.exports = router;
