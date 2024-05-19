const ChangeLogService = require('../core/services/ChangeLogService');

class ChangeLogController {
    async getChangesForScript(req, res) {
        try {
            const changes = await ChangeLogService.getChangesForScript(req.params.scriptId);
            res.status(200).json(changes);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = new ChangeLogController();
