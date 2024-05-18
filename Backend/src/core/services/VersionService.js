const VersionRepository = require('../../infrastructure/databases/VersionRepository');
const ScriptRepository = require('../../infrastructure/databases/ScriptRepository');
const SceneRepository = require('../../infrastructure/databases/SceneRepository');
const ActorLocationRepository = require('../../infrastructure/databases/ActorLocationRepository');
const ActorPoseRepository = require('../../infrastructure/databases/ActorPoseRepository');
const DialogueRepository = require('../../infrastructure/databases/DialogueRepository');

const versionRepository = new VersionRepository();
const scriptRepository = new ScriptRepository();
const sceneRepository = new SceneRepository();
const actorLocationRepository = new ActorLocationRepository();
const actorPoseRepository = new ActorPoseRepository();
const dialogueRepository = new DialogueRepository();

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

module.exports = VersionService;
