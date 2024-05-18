const User = require('../../core/models/User');

class UserRepository {
    async create(user) {
        return await User.create(user);
    }

    async findByUsername(username) {
        return await User.findOne({ where: { username } });
    }
}

module.exports = UserRepository;
