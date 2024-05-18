const Version = require('../../core/models/Version');

class VersionRepository {
    async create(versionData) {
        return await Version.create(versionData);
    }

    async findByScriptId(scriptId) {
        return await Version.findAll({
            where: { scriptId },
            order: [['versionNumber', 'DESC']]
        });
    }

    async findById(id) {
        return await Version.findByPk(id);
    }

    async getNextVersionNumber(scriptId) {
        const lastVersion = await Version.findOne({
            where: { scriptId },
            order: [['versionNumber', 'DESC']]
        });

        return lastVersion ? lastVersion.versionNumber + 1 : 1;
    }
}

module.exports = VersionRepository;
