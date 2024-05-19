const scenePartRepository = require('../../infrastructure/databases/ScenePartRepository');

class ScenePartService {
    async createScenePart(scenePartData) {
        return await scenePartRepository.create(scenePartData);
    }

    async getAllSceneParts() {
        return await scenePartRepository.findAll();
    }

    async getScenePartById(id) {
        return await scenePartRepository.findById(id);
    }

    async updateScenePart(id, updatedData) {
        return await scenePartRepository.update(id, updatedData);
    }

    async deleteScenePart(id) {
        return await scenePartRepository.delete(id);
    }
}

module.exports = new ScenePartService();
