const scriptRepository = require('../../infrastructure/databases/ScriptRepository');

class ScriptService {
    async createScript(scriptData) {
        return await scriptRepository.create(scriptData);
    }

    async getAllScripts() {
        return await scriptRepository.findAll({ attributes: ['id', 'title', 'genre'] });
    }

    async getScriptById(id) {
        return await scriptRepository.findById(id);
    }

    async updateScript(id, updatedData) {
        return await scriptRepository.update(id, updatedData);
    }

    async deleteScript(id) {
        return await scriptRepository.delete(id);
    }
}

module.exports = new ScriptService();
