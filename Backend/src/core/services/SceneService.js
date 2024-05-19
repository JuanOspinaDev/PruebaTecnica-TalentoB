const sceneRepository = require('../../infrastructure/databases/SceneRepository');

class SceneService {
    async createScene(scriptId, sceneData, transaction) {
        const script = await scriptRepository.findById(scriptId);
        if (!script) {
            throw new Error('Script not found');
        }
        return await sceneRepository.create(sceneData, transaction);

    }

    async getAllScenes() {
        return await sceneRepository.findAll();
    }

    async getSceneById(id) {
        return await sceneRepository.findById(id);
    }

    async updateScene(id, updatedData) {
        return await sceneRepository.update(id, updatedData);
    }

    async deleteScene(id) {
        return await sceneRepository.delete(id);
    }
}

module.exports = new SceneService();
