const { body, param } = require('express-validator');

const characterValidator = {
    create: [
        body('name').notEmpty().withMessage('Name is required'),
        body('actorId').isInt().withMessage('Actor ID must be an integer'),
        body('description').optional().isString().withMessage('Description must be a string')
    ],
    update: [
        param('id').isInt().withMessage('ID must be an integer'),
        body('name').optional().notEmpty().withMessage('Name is required if provided'),
        body('actorId').optional().isInt().withMessage('Actor ID must be an integer if provided'),
        body('description').optional().isString().withMessage('Description must be a string')
    ],
    getById: [
        param('id').isInt().withMessage('ID must be an integer')
    ]
};

module.exports = characterValidator;
