const sceneService = require('../core/services/SceneService');
const ChangeLogService = require('../core/services/ChangeLogService');
const { validationResult } = require('express-validator');

class SceneController {
    async create(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            const scene = await sceneService.createScene(req.body);

            await ChangeLogService.logChange({
                entity: 'Scene',
                changeType: 'create',
                changeDetails: req.body,
                userId: req.user.id,
                username: req.user.username,
                scriptId: req.params.scriptId
            });
            res.status(201).json(scene);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getAll(req, res) {
        try {
            const scenes = await sceneService.getAllScenes();
            res.status(200).json(scenes);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getById(req, res) {
        try {
            const scene = await sceneService.getSceneById(req.params.id);
            if (!scene) {
                return res.status(404).json({ error: 'Scene not found' });
            }
            res.status(200).json(scene);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async update(req, res) {
        try {
            const scene = await sceneService.updateScene(req.params.id, req.body);
            if (!scene[0]) {
                return res.status(404).json({ error: 'Scene not found' });
            }
            await ChangeLogService.logChange({
                entity: 'Scene',
                changeType: 'update',
                changeDetails: req.body,
                userId: req.user.id,
                username: req.user.username,
                scriptId: req.params.scriptId
            });
            res.status(200).json({ message: 'Scene updated successfully' });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async delete(req, res) {
        try {
            const result = await sceneService.deleteScene(req.params.id);
            if (!result) {
                return res.status(404).json({ error: 'Scene not found' });
            }
            await ChangeLogService.logChange({
                entity: 'Scene',
                changeType: 'delete',
                changeDetails: req.body,
                userId: req.user.id,
                username: req.user.username,
                scriptId: req.params.scriptId
            });
            res.status(200).json({ message: 'Scene deleted successfully' });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = new SceneController();
