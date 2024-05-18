const DialogueRepository = require('../../infrastructure/databases/DialogueRepository');
const SceneRepository = require('../../infrastructure/databases/SceneRepository');
const dialogueRepository = new DialogueRepository();
const sceneRepository = new SceneRepository();

class DialogueService {
    async createDialogue(sceneId, dialogueData) {
        const scene = await sceneRepository.findById(sceneId);
        if (!scene) {
            throw new Error('Scene not found');
        }
        return await dialogueRepository.create({ ...dialogueData, sceneId });
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

module.exports = DialogueService;
