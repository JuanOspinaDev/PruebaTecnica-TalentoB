const { body, param } = require('express-validator');

const scenePartValidator = {
    create: [
        body('description').optional().isString().withMessage('Description must be a string'),
        body('sceneId').isInt().withMessage('Scene ID must be an integer'),
        body('order').isInt().withMessage('Order must be an integer')
    ],
    update: [
        param('id').isInt().withMessage('ID must be an integer'),
        body('description').optional().isString().withMessage('Description must be a string'),
        body('sceneId').optional().isInt().withMessage('Scene ID must be an integer'),
        body('order').optional().isInt().withMessage('Order must be an integer')
    ],
    getById: [
        param('id').isInt().withMessage('ID must be an integer')
    ]
};

module.exports = scenePartValidator;
