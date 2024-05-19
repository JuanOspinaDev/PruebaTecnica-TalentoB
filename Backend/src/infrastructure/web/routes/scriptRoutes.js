const express = require('express');
const scriptController = require('../../../controllers/ScriptController');
const scriptValidator = require('../../../validators/scriptValidator');
const authMiddleware = require('../middlewares/authMiddleware');
const authorizeRole = require('../middlewares/authorizeRol');

const router = express.Router();

router.post(
    '/', 
    authMiddleware, 
    authorizeRole('guionista'),
    scriptValidator.create, 
    scriptController.create
);
router.get(
    '/', 
    authMiddleware, 
    scriptController.getAll
);
router.get(
    '/:id', 
    authMiddleware, 
    scriptController.getById
);
router.put(
    '/:id', 
    authMiddleware, 
    authorizeRole('guionista'),
    scriptValidator.update, 
    scriptController.update
);
router.delete(
    '/:id', 
    authMiddleware, 
    authorizeRole('guionista'),
    scriptController.delete
);

module.exports = router;
