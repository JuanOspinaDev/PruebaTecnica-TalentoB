const ActorRepository = require('../../infrastructure/databases/ActorRepository');
const actorRepository = new ActorRepository();

class ActorService {
    async createActor(actorData) {
        return await actorRepository.create(actorData);
    }

    async getAllActors() {
        return await actorRepository.findAll();
    }

    async getActorById(id) {
        return await actorRepository.findById(id);
    }

    async updateActor(id, updatedData) {
        return await actorRepository.update(id, updatedData);
    }

    async deleteActor(id) {
        return await actorRepository.delete(id);
    }
}

module.exports = new ActorService();
