const Scene = require('../../core/models/Scene');

class SceneRepository {
    async create(sceneData) {
        console.log(sceneData)
        return await Scene.create(sceneData);
    }

    async findAll() {
        return await Scene.findAll();
    }

    async findById(id) {
        return await Scene.findByPk(id);
    }

    async update(id, updatedData) {
        return await Scene.update(updatedData, {
            where: { id }
        });
    }

    async delete(id) {
        return await Scene.destroy({
            where: { id }
        });
    }

    async findByScriptId(scriptId) {
        return await Scene.findAll({
            where: { scriptId }
        });
    }
}

module.exports = new SceneRepository();
