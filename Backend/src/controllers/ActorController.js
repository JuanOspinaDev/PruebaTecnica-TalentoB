const ActorService = require('../core/services/ActorService');
const { validationResult } = require('express-validator');

class ActorController {
    async create(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            const actor = await ActorService.createActor(req.body);
            res.status(201).json(actor);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getAll(req, res) {
        try {
            const actors = await ActorService.getAllActors();
            res.status(200).json(actors);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getById(req, res) {
        try {
            const actor = await ActorService.getActorById(req.params.id);
            if (!actor) {
                return res.status(404).json({ error: 'Actor not found' });
            }
            res.status(200).json(actor);
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
            const actor = await ActorService.updateActor(req.params.id, req.body);
            res.status(200).json(actor);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async delete(req, res) {
        try {
            const result = await ActorService.deleteActor(req.params.id);
            if (!result) {
                return res.status(404).json({ error: 'Actor not found' });
            }
            res.status(200).json({ message: 'Actor deleted successfully' });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = new ActorController();
