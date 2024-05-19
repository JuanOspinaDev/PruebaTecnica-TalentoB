const ScenePart = require('../../core/models/ScenePart');

class ScenePartRepository {
    async create(scenePartData) {
        return await ScenePart.create(scenePartData);
    }

    async findAll() {
        return await ScenePart.findAll();
    }

    async findById(id) {
        return await ScenePart.findByPk(id);
    }

    async update(id, updatedData) {
        const [affectedRows, [updatedScenePart]] = await ScenePart.update(updatedData, {
            where: { id },
            returning: true,
            plain: true
        });

        if (affectedRows === 0) {
            throw new Error('ScenePart not found');
        }

        return updatedScenePart;
    }

    async delete(id) {
        return await ScenePart.destroy({
            where: { id }
        });
    }
}

module.exports = ScenePartRepository;
