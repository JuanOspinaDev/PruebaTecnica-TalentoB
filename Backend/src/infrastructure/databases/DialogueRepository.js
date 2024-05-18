const Dialogue = require('../../core/models/Dialogue');

class DialogueRepository {
    async create(dialogueData) {
        return await Dialogue.create(dialogueData);
    }

    async findAll() {
        return await Dialogue.findAll();
    }

    async findById(id) {
        return await Dialogue.findByPk(id);
    }

    async update(id, updatedData) {
        return await Dialogue.update(updatedData, {
            where: { id }
        });
    }

    async delete(id) {
        return await Dialogue.destroy({
            where: { id }
        });
    }

    async findByScriptId(scriptId) {
        return await Dialogue.findAll({
            where: { scriptId }
        });
    }
}

module.exports = DialogueRepository;
