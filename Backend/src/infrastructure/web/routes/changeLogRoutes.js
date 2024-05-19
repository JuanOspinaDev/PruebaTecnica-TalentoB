const express = require('express');
const ChangeLogController = require('../../../controllers/ChangeLogController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get(
    '/scripts/:scriptId', 
    authMiddleware, 
    ChangeLogController.getChangesForScript
);

module.exports = router;
