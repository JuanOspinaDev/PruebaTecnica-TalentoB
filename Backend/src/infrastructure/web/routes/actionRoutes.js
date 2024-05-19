const express = require('express');
const ActionController = require('../../../controllers/ActionController');
const actionValidator = require('../../../validators/actionValidator');

const router = express.Router();

router.post('/', actionValidator.create, ActionController.create);
router.get('/', ActionController.getAll);
router.get('/:id', actionValidator.getById, ActionController.getById);
router.put('/:id', actionValidator.update, ActionController.update);
router.delete('/:id', actionValidator.getById, ActionController.delete);

module.exports = router;
