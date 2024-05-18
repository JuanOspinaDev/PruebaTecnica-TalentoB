const Script = require('../../core/models/Script');

class ScriptRepository {
    async create(scriptData) {
        return await Script.create(scriptData);
    }

    async findAll() {
        return await Script.findAll();
    }

    async findById(id) {
        return await Script.findByPk(id);
    }

    async update(id, updatedData) {
        return await Script.update(updatedData, {
            where: { id }
        });
    }

    async delete(id) {
        return await Script.destroy({
            where: { id }
        });
    }
}

module.exports = ScriptRepository;
