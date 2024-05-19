const actorLocationService = require('../core/services/ActorLocationService');
const { validationResult } = require('express-validator');

class ActorLocationController {
    async create(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            const actorLocation = await actorLocationService.createActorLocation(req.params.sceneId, req.body);
            await ChangeLogService.logChange({
                entity: 'ActorLocation',
                changeType: 'create',
                changeDetails: req.body,
                userId: req.user.id,
                username: req.user.username,
                scriptId: req.params.scriptId
            });
            res.status(201).json(actorLocation);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getAll(req, res) {
        try {
            const actorLocations = await actorLocationService.getAllActorLocations();
            res.status(200).json(actorLocations);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getById(req, res) {
        try {
            const actorLocation = await actorLocationService.getActorLocationById(req.params.id);
            if (!actorLocation) {
                return res.status(404).json({ error: 'Actor Location not found' });
            }
            res.status(200).json(actorLocation);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async update(req, res) {
        try {
            const actorLocation = await actorLocationService.updateActorLocation(req.params.id, req.body);
            if (!actorLocation[0]) {
                return res.status(404).json({ error: 'Actor Location not found' });
            }
            await ChangeLogService.logChange({
                entity: 'ActorLocation',
                changeType: 'update',
                changeDetails: req.body,
                userId: req.user.id,
                username: req.user.username,
                scriptId: req.params.scriptId
            });
            res.status(200).json({ message: 'Actor Location updated successfully' });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async delete(req, res) {
        try {
            const result = await actorLocationService.deleteActorLocation(req.params.id);
            if (!result) {
                return res.status(404).json({ error: 'Actor Location not found' });
            }
            await ChangeLogService.logChange({
                entity: 'ActorLocation',
                changeType: 'delete',
                changeDetails: req.body,
                userId: req.user.id,
                username: req.user.username,
                scriptId: req.params.scriptId
            });
            res.status(200).json({ message: 'Actor Location deleted successfully' });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = new ActorLocationController();
