const CharacterService = require('../core/services/CharacterService');
const ChangeLogService = require('../core/services/ChangeLogService');
const { validationResult } = require('express-validator');

class CharacterController {
    async create(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            const character = await CharacterService.createCharacter(req.body);
            await ChangeLogService.logChange({
                entity: 'Character',
                changeType: 'create',
                changeDetails: req.body,
                userId: req.user.id,
                username: req.user.username,
                scriptId: req.params.scriptId
            });
            res.status(201).json(character);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getAll(req, res) {
        try {
            const characters = await CharacterService.getAllCharacters();
            res.status(200).json(characters);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getById(req, res) {
        try {
            const character = await CharacterService.getCharacterById(req.params.id);
            if (!character) {
                return res.status(404).json({ error: 'Character not found' });
            }
            res.status(200).json(character);
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
            const character = await CharacterService.updateCharacter(req.params.id, req.body);
            await ChangeLogService.logChange({
                entity: 'Character',
                changeType: 'update',
                changeDetails: req.body,
                userId: req.user.id,
                username: req.user.username,
                scriptId: req.params.scriptId
            });
            res.status(200).json(character);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async delete(req, res) {
        try {
            const result = await CharacterService.deleteCharacter(req.params.id);
            if (!result) {
                return res.status(404).json({ error: 'Character not found' });
            }
            await ChangeLogService.logChange({
                entity: 'Character',
                changeType: 'delete',
                changeDetails: req.body,
                userId: req.user.id,
                username: req.user.username,
                scriptId: req.params.scriptId
            });
            res.status(200).json({ message: 'Character deleted successfully' });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = new CharacterController();
