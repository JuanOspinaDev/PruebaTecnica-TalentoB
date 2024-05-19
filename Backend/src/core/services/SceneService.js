const sceneRepository = require('../../infrastructure/databases/SceneRepository');
const scriptRepository = require('../../infrastructure/databases/ScriptRepository');

class SceneService {
    async createScene(sceneData) {
        const script = await scriptRepository.findById(sceneData.scriptId);
        if (!script) {
            throw new Error('Script not found');
        }
        return await sceneRepository.create(sceneData);

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
