const scriptRepository = require('../../infrastructure/databases/ScriptRepository');

class ScriptService {
    async createScript(scriptData) {
        return await scriptRepository.create(scriptData);
    }

    async getAllScripts() {
        return await scriptRepository.findAll();
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

    async getScriptsByGuionistaId(guionistaId) {
        return await scriptRepository.findAll({ where: { guionistaId } });
    }
}

module.exports = new ScriptService();
