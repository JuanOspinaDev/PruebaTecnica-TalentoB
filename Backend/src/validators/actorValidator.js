const { body, param } = require('express-validator');

const actorValidator = {
    create: [
        body('name').notEmpty().withMessage('Name is required'),
        body('age').optional().isInt().withMessage('Age must be an integer')
    ],
    update: [
        param('id').isInt().withMessage('ID must be an integer'),
        body('name').optional().notEmpty().withMessage('Name is required if provided'),
        body('age').optional().isInt().withMessage('Age must be an integer')
    ],
    getById: [
        param('id').isInt().withMessage('ID must be an integer')
    ]
};

module.exports = actorValidator;
