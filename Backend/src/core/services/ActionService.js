const ActionRepository = require('../../infrastructure/databases/ActionRepository');
const actionRepository = new ActionRepository();

class ActionService {
    async createAction(actionData) {
        return await actionRepository.create(actionData);
    }

    async getAllActions() {
        return await actionRepository.findAll();
    }

    async getActionById(id) {
        return await actionRepository.findById(id);
    }

    async updateAction(id, updatedData) {
        return await actionRepository.update(id, updatedData);
    }

    async deleteAction(id) {
        return await actionRepository.delete(id);
    }
}

module.exports = new ActionService();
