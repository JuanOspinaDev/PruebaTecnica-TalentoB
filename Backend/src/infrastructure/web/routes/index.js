const express = require('express');
const userRoutes = require('./userRoutes');
const scriptRoutes = require('./scriptRoutes');
const sceneRoutes = require('./sceneRoutes');
const actorLocationRoutes = require('./actorLocationRoutes');
const actorPoseRoutes = require('./actorPoseRoutes');
const dialogueRoutes = require('./dialogueRoutes');
const versionRoutes = require('./versionRoutes');
const actionRoutes = require('./actionRoutes');
const changeLogRoutes = require('./changeLogRoutes');

const router = express.Router();

router.use('/users', userRoutes);
router.use('/scripts', scriptRoutes);
router.use('/scenes', sceneRoutes);
router.use('/actor-locations', actorLocationRoutes);
router.use('/actor-poses', actorPoseRoutes);
router.use('/dialogues', dialogueRoutes);
router.use('/versions', versionRoutes);
router.use('/actions', actionRoutes);
router.use('/change-logs', changeLogRoutes);

module.exports = router;
