const changeLogRepository = require('../../infrastructure/databases/ChangeLogRepository');

class ChangeLogService {
    async logChange(changeData) {
        return await changeLogRepository.create(changeData);
    }

    async getChangesForScript(scriptId) {
        return await changeLogRepository.findByScriptId(scriptId);
    }
}

module.exports = new ChangeLogService();
