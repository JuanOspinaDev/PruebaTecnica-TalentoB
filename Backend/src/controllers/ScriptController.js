const scriptService = require('../core/services/ScriptService');
const { validationResult } = require('express-validator');
const ChangeLogService = require('../core/services/ChangeLogService');

class ScriptController {
    async create(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            const script = await scriptService.createScript(req.body);
            console.log(req.user)
            await ChangeLogService.logChange({
                entity: 'Script',
                changeType: 'create',
                changeDetails: req.body,
                userId: req.user.id,
                username: req.user.username,
                scriptId: script.id
            });

            res.status(201).json(script);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getAll(req, res) {
        try {
            const scripts = await scriptService.getAllScripts();
            res.status(200).json(scripts);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getById(req, res) {
        try {
            const script = await scriptService.getScriptById(req.params.id);
            if (!script) {
                return res.status(404).json({ error: 'Script not found' });
            }
            res.status(200).json(script);
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
            const script = await scriptService.updateScript(req.params.id, req.body);
            if (!script[0]) {
                return res.status(404).json({ error: 'Script not found' });
            }
            await ChangeLogService.logChange({
                entity: 'Script',
                changeType: 'update',
                changeDetails: req.body,
                userId: req.user.id,
                username: req.user.username,
                scriptId: script.scriptId
            });
            res.status(200).json({ message: 'Script updated successfully' });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async delete(req, res) {
        try {
            const result = await scriptService.deleteScript(req.params.id);
            if (!result) {
                return res.status(404).json({ error: 'Script not found' });
            }
            res.status(200).json({ message: 'Script deleted successfully' });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = new ScriptController();
