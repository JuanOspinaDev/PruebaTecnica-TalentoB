const ActorPose = require('../../core/models/ActorPose');

class ActorPoseRepository {
    async create(poseData) {
        return await ActorPose.create(poseData);
    }

    async findAll() {
        return await ActorPose.findAll();
    }

    async findById(id) {
        return await ActorPose.findByPk(id);
    }

    async update(id, updatedData) {
        return await ActorPose.update(updatedData, {
            where: { id }
        });
    }

    async delete(id) {
        return await ActorPose.destroy({
            where: { id }
        });
    }

    async findByScriptId(scriptId) {
        return await ActorPose.findAll({
            where: { scriptId }
        });
    }
}

module.exports = ActorPoseRepository;
