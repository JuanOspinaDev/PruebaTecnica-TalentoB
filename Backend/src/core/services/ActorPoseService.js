const actorPoseRepository = require('../../infrastructure/databases/ActorPoseRepository');
const sceneRepository = require('../../infrastructure/databases/SceneRepository');

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

module.exports = new ActorPoseService();
