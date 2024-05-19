const ChangeLog = require('../../core/models/ChangeLog');

class ChangeLogRepository {
    async create(changeData) {
        return await ChangeLog.create(changeData);
    }

    async findByScriptId(scriptId) {
        return await ChangeLog.findAll({
            where: { scriptId }
        });
    }
}

module.exports = new ChangeLogRepository();
