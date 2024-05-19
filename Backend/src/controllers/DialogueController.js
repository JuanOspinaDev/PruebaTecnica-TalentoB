const dialogueService = require('../core/services/DialogueService');
const { validationResult } = require('express-validator');

class DialogueController {
    async create(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            const dialogue = await dialogueService.createDialogue(req.params.sceneId, req.body);
            await ChangeLogService.logChange({
                entity: 'Dialogue',
                changeType: 'create',
                changeDetails: req.body,
                userId: req.user.id,
                scriptId: req.params.scriptId
            });
            res.status(201).json(dialogue);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getAll(req, res) {
        try {
            const dialogues = await dialogueService.getAllDialogues();
            res.status(200).json(dialogues);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getById(req, res) {
        try {
            const dialogue = await dialogueService.getDialogueById(req.params.id);
            if (!dialogue) {
                return res.status(404).json({ error: 'Dialogue not found' });
            }
            res.status(200).json(dialogue);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async update(req, res) {
        try {
            const dialogue = await dialogueService.updateDialogue(req.params.id, req.body);
            if (!dialogue[0]) {
                return res.status(404).json({ error: 'Dialogue not found' });
            }
            await ChangeLogService.logChange({
                entity: 'Dialogue',
                changeType: 'update',
                changeDetails: req.body,
                userId: req.user.id,
                scriptId: req.params.scriptId
            });
            res.status(200).json({ message: 'Dialogue updated successfully' });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async delete(req, res) {
        try {
            const result = await dialogueService.deleteDialogue(req.params.id);
            if (!result) {
                return res.status(404).json({ error: 'Dialogue not found' });
            }
            await ChangeLogService.logChange({
                entity: 'Dialogue',
                changeType: 'delete',
                changeDetails: req.body,
                userId: req.user.id,
                scriptId: req.params.scriptId
            });
            res.status(200).json({ message: 'Dialogue deleted successfully' });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = new DialogueController();
