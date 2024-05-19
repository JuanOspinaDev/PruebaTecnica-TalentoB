const express = require('express');
const ActionController = require('../../../controllers/ActionController');
const actionValidator = require('../../../validators/actionValidator');
const authMiddleware = require('../middlewares/authMiddleware');
const authorizeRole = require('../middlewares/authorizeRol');

const router = express.Router();

router.post(
    '/',
    authMiddleware, 
    authorizeRole('guionista'), 
    actionValidator.create, 
    ActionController.create
);
router.get(
    '/',
    authMiddleware, 
    ActionController.getAll
);
router.get(
    '/:id',
    authMiddleware, 
    actionValidator.getById, 
    ActionController.getById
);
router.put(
    '/:id',
    authMiddleware, 
    authorizeRole('guionista'), 
    actionValidator.update, 
    ActionController.update
);
router.delete(
    '/:id',
    authMiddleware, 
    authorizeRole('guionista'), 
    actionValidator.getById, 
    ActionController.delete
);

module.exports = router;
