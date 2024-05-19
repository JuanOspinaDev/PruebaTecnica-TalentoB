const Actor = require('../../core/models/Actor');

class ActorRepository {
    async create(actorData) {
        return await Actor.create(actorData);
    }

    async findAll() {
        return await Actor.findAll();
    }

    async findById(id) {
        return await Actor.findByPk(id);
    }

    async update(id, updatedData) {
        const [affectedRows, [updatedActor]] = await Actor.update(updatedData, {
            where: { id },
            returning: true,
            plain: true
        });

        if (affectedRows === 0) {
            throw new Error('Actor not found');
        }

        return updatedActor;
    }

    async delete(id) {
        return await Actor.destroy({
            where: { id }
        });
    }
}

module.exports = ActorRepository;
