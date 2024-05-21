const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserRepository = require('../../infrastructure/databases/UserRepository');  
class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }

    async register(userData) {
        const hashedPassword = await bcrypt.hash(userData.password, 10);
        const newUser = { ...userData, password: hashedPassword };
        return await this.userRepository.create(newUser);
    }

    async login(username, password) {
        const user = await this.userRepository.findByUsername(username);
        if (!user) {
            throw new Error('User not found');
        }
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            throw new Error('Invalid password');
        }
        const token = jwt.sign({ user: { id: user.id, username: user.username, role: user.role } }, process.env.JWT_SECRET, { expiresIn: '5h' });
        return { user, token };
    }
}

module.exports = UserService;
