const dialogueRepository = require('../../infrastructure/databases/DialogueRepository');
const scenePartRepository = require('../../infrastructure/databases/ScenePartRepository');

class DialogueService {
    async createDialogue(dialogueData) {
        const scene = await scenePartRepository.findById(dialogueData.scenePartId);
        if (!scene) {
            throw new Error('Scene not found');
        }
        return await dialogueRepository.create({ ...dialogueData });
    }

    async getAllDialogues() {
        return await dialogueRepository.findAll();
    }

    async getDialogueById(id) {
        return await dialogueRepository.findById(id);
    }

    async updateDialogue(id, updatedData) {
        return await dialogueRepository.update(id, updatedData);
    }

    async deleteDialogue(id) {
        return await dialogueRepository.delete(id);
    }
}

module.exports = new DialogueService();
