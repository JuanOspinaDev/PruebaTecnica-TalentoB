const actorPoseService = require('../core/services/ActorPoseService');
const ChangeLogService = require('../core/services/ChangeLogService');
const { validationResult } = require('express-validator');

class ActorPoseController {
    async create(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            const actorPose = await actorPoseService.createActorPose(req.params.sceneId, req.body);
            await ChangeLogService.logChange({
                entity: 'ActorPose',
                changeType: 'create',
                changeDetails: req.body,
                userId: req.user.id,
                username: req.user.username,
                scriptId: req.params.scriptId
            });
            res.status(201).json(actorPose);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getAll(req, res) {
        try {
            const actorPoses = await actorPoseService.getAllActorPoses();
            res.status(200).json(actorPoses);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getById(req, res) {
        try {
            const actorPose = await actorPoseService.getActorPoseById(req.params.id);
            if (!actorPose) {
                return res.status(404).json({ error: 'Actor Pose not found' });
            }
            res.status(200).json(actorPose);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async update(req, res) {
        try {
            const actorPose = await actorPoseService.updateActorPose(req.params.id, req.body);
            if (!actorPose[0]) {
                return res.status(404).json({ error: 'Actor Pose not found' });
            }
            await ChangeLogService.logChange({
                entity: 'ActorPose',
                changeType: 'update',
                changeDetails: req.body,
                userId: req.user.id,
                username: req.user.username,
                scriptId: req.params.scriptId
            });
            res.status(200).json({ message: 'Actor Pose updated successfully' });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async delete(req, res) {
        try {
            const result = await actorPoseService.deleteActorPose(req.params.id);
            if (!result) {
                return res.status(404).json({ error: 'Actor Pose not found' });
            }
            await ChangeLogService.logChange({
                entity: 'ActorPose',
                changeType: 'delete',
                changeDetails: req.body,
                userId: req.user.id,
                username: req.user.username,
                scriptId: req.params.scriptId
            });
            res.status(200).json({ message: 'Actor Pose deleted successfully' });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = new ActorPoseController();
