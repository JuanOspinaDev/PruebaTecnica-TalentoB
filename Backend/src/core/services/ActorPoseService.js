const ActorPoseRepository = require('../../infrastructure/databases/ActorPoseRepository');
const SceneRepository = require('../../infrastructure/databases/SceneRepository');
const actorPoseRepository = new ActorPoseRepository();
const sceneRepository = new SceneRepository();

class ActorPoseService {
    async createActorPose(sceneId, poseData) {
        const scene = await sceneRepository.findById(sceneId);
        if (!scene) {
            throw new Error('Scene not found');
        }
        return await actorPoseRepository.create({ ...poseData, sceneId });
    }

    async getAllActorPoses() {
        return await actorPoseRepository.findAll();
    }

    async getActorPoseById(id) {
        return await actorPoseRepository.findById(id);
    }

    async updateActorPose(id, updatedData) {
        return await actorPoseRepository.update(id, updatedData);
    }

    async deleteActorPose(id) {
        return await actorPoseRepository.delete(id);
    }
}

module.exports = ActorPoseService;
