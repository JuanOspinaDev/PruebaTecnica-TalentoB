const ActorLocation = require('../../core/models/ActorLocation');

class ActorLocationRepository {
    async create(locationData) {
        return await ActorLocation.create(locationData);
    }

    async findAll() {
        return await ActorLocation.findAll();
    }

    async findById(id) {
        return await ActorLocation.findByPk(id);
    }

    async update(id, updatedData) {
        return await ActorLocation.update(updatedData, {
            where: { id }
        });
    }

    async delete(id) {
        return await ActorLocation.destroy({
            where: { id }
        });
    }

    async findByScriptId(scriptId) {
        return await ActorLocation.findAll({
            where: { scriptId }
        });
    }
}

module.exports = new ActorLocationRepository();
