const CharacterRepository = require('../../infrastructure/databases/CharacterRepository');
const characterRepository = new CharacterRepository();

class CharacterService {
    async createCharacter(characterData) {
        return await characterRepository.create(characterData);
    }

    async getAllCharacters() {
        return await characterRepository.findAll();
    }

    async getCharacterById(id) {
        return await characterRepository.findById(id);
    }

    async updateCharacter(id, updatedData) {
        return await characterRepository.update(id, updatedData);
    }

    async deleteCharacter(id) {
        return await characterRepository.delete(id);
    }
}

module.exports = new CharacterService();
