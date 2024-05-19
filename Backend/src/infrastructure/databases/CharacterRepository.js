const Character = require('../../core/models/Character');

class CharacterRepository {
    async create(characterData) {
        return await Character.create(characterData);
    }

    async findAll() {
        return await Character.findAll();
    }

    async findById(id) {
        return await Character.findByPk(id);
    }

    async update(id, updatedData) {
        const [affectedRows, [updatedCharacter]] = await Character.update(updatedData, {
            where: { id },
            returning: true,
            plain: true
        });

        if (affectedRows === 0) {
            throw new Error('Character not found');
        }

        return updatedCharacter;
    }

    async delete(id) {
        return await Character.destroy({
            where: { id }
        });
    }
}

module.exports = new CharacterRepository();
