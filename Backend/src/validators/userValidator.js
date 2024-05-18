const { body } = require('express-validator');

const userValidator = {
    register: [
        body('username').notEmpty().withMessage('Username is required'),
        body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
        body('role').optional().isIn(['guionista', 'regular']).withMessage('Invalid role')
    ],
    login: [
        body('username').notEmpty().withMessage('Username is required'),
        body('password').notEmpty().withMessage('Password is required')
    ]
};

module.exports = userValidator;
