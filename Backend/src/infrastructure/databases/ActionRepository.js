const Action = require('../../core/models/Action');

class ActionRepository {
    async create(actionData) {
        return await Action.create(actionData);
    }

    async findAll() {
        return await Action.findAll();
    }

    async findById(id) {
        return await Action.findByPk(id);
    }

    async update(id, updatedData) {
        const [affectedRows, [updatedAction]] = await Action.update(updatedData, {
            where: { id },
            returning: true,
            plain: true
        });

        if (affectedRows === 0) {
            throw new Error('Action not found');
        }

        return updatedAction;
    }

    async delete(id) {
        return await Action.destroy({
            where: { id }
        });
    }
}

module.exports = ActionRepository;
