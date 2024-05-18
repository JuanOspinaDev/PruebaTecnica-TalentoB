const express = require('express');
const versionController = require('../../../controllers/VersionController');

const router = express.Router();

router.post('/:scriptId', versionController.create);
router.get('/:scriptId', versionController.getVersions);
router.get('/version/:id', versionController.getById);

module.exports = router;
