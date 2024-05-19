const ActionService = require('../core/services/ActionService');
const { validationResult } = require('express-validator');

class ActionController {
    async create(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            const action = await ActionService.createAction(req.body);
            res.status(201).json(action);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getAll(req, res) {
        try {
            const actions = await ActionService.getAllActions();
            res.status(200).json(actions);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getById(req, res) {
        try {
            const action = await ActionService.getActionById(req.params.id);
            if (!action) {
                return res.status(404).json({ error: 'Action not found' });
            }
            res.status(200).json(action);
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
            const action = await ActionService.updateAction(req.params.id, req.body);
            res.status(200).json(action);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async delete(req, res) {
        try {
            const result = await ActionService.deleteAction(req.params.id);
            if (!result) {
                return res.status(404).json({ error: 'Action not found' });
            }
            res.status(200).json({ message: 'Action deleted successfully' });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = new ActionController();
