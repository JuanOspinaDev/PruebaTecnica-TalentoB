const ScenePartService = require('../core/services/ScenePartService');
const ChangeLogService = require('../core/services/ChangeLogService');
const { validationResult } = require('express-validator');

class ScenePartController {
    async create(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            const scenePart = await ScenePartService.createScenePart(req.body);
            console.log(req.params.scriptId)
            await ChangeLogService.logChange({
                entity: 'ScenePart',
                changeType: 'create',
                changeDetails: req.body,
                userId: req.user.id,
                username: req.user.username,
                scriptId: req.params.scriptId
            });
            res.status(201).json(scenePart);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getAll(req, res) {
        try {
            const sceneParts = await ScenePartService.getAllSceneParts();
            res.status(200).json(sceneParts);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getById(req, res) {
        try {
            const scenePart = await ScenePartService.getScenePartById(req.params.id);
            if (!scenePart) {
                return res.status(404).json({ error: 'ScenePart not found' });
            }
            res.status(200).json(scenePart);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async update(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            const scenePart = await ScenePartService.updateScenePart(req.params.id, req.body);
            if (!scenePart[0]) {
                return res.status(404).json({ error: 'ScenePart not found' });
            }
            await ChangeLogService.logChange({
                entity: 'ScenePart',
                changeType: 'update',
                changeDetails: req.body,
                userId: req.user.id,
                username: req.user.username,
                scriptId: req.params.scriptId
            });
            res.status(200).json({ message: 'ScenePart updated successfully' });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async delete(req, res) {
        try {
            const result = await ScenePartService.deleteScenePart(req.params.id);
            if (!result) {
                return res.status(404).json({ error: 'ScenePart not found' });
            }
            await ChangeLogService.logChange({
                entity: 'ScenePart',
                changeType: 'delete',
                changeDetails: req.body,
                userId: req.user.id,
                username: req.user.username,
                scriptId: req.params.scriptId
            });
            res.status(200).json({ message: 'ScenePart deleted successfully' });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = new ScenePartController();
