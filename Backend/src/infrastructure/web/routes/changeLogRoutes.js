const express = require('express');
const ChangeLogController = require('../controllers/ChangeLogController');

const router = express.Router();

router.get('/scripts/:scriptId', ChangeLogController.getChangesForScript);

module.exports = router;
