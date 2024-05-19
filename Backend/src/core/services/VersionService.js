const versionRepository = require('../../infrastructure/databases/VersionRepository');
const scriptRepository = require('../../infrastructure/databases/ScriptRepository');
const sceneRepository = require('../../infrastructure/databases/SceneRepository');
const actorLocationRepository = require('../../infrastructure/databases/ActorLocationRepository');
const actorPoseRepository = require('../../infrastructure/databases/ActorPoseRepository');
const dialogueRepository = require('../../infrastructure/databases/DialogueRepository');

class VersionService {
    async createVersion(scriptId) {
        const script = await scriptRepository.findById(scriptId);
        if (!script) {
            throw new Error('Script not found');
        }

        const scenes = await sceneRepository.findByScriptId(scriptId);
        const actorLocations = await actorLocationRepository.findByScriptId(scriptId);
        const actorPoses = await actorPoseRepository.findByScriptId(scriptId);
        const dialogues = await dialogueRepository.findByScriptId(scriptId);

        const content = {
            script,
            scenes,
            actorLocations,
            actorPoses,
            dialogues
        };

        const versionNumber = await versionRepository.getNextVersionNumber(scriptId);
        return await versionRepository.create({ scriptId, content, versionNumber });
    }

    async getVersions(scriptId) {
        return await versionRepository.findByScriptId(scriptId);
    }

    async getVersionById(id) {
        return await versionRepository.findById(id);
    }
}

module.exports = new VersionService();
