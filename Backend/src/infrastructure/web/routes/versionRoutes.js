const express = require('express');
const versionController = require('../../../controllers/VersionController');
const authMiddleware = require('../middlewares/authMiddleware');
const authorizeRole = require('../middlewares/authorizeRol');

const router = express.Router();

router.post(
    '/:scriptId',
    authMiddleware, 
    authorizeRole('guionista'), 
    versionController.create
);
router.get(
    '/:scriptId', 
    authMiddleware, 
    versionController.getVersions
);
router.get(
    '/version/:id', 
    authMiddleware, 
    versionController.getById);

module.exports = router;
