const SceneRepository = require('../../infrastructure/databases/SceneRepository');
const ScriptRepository = require('../../infrastructure/databases/ScriptRepository');
const sceneRepository = new SceneRepository();
const scriptRepository = new ScriptRepository();

class SceneService {
    async createScene(scriptId, sceneData) {
        const script = await scriptRepository.findById(scriptId);
        if (!script) {
            throw new Error('Script not found');
        }
        return await sceneRepository.create({ ...sceneData, scriptId });
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

module.exports = SceneService;
