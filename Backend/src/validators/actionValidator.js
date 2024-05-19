const { body, param } = require('express-validator');

const actionValidator = {
    create: [
        body('description').notEmpty().withMessage('Description is required'),
        body('order').isInt().withMessage('Order must be an integer'),
        body('scenePartId').isInt().withMessage('ScenePart ID must be an integer')
    ],
    update: [
        param('id').isInt().withMessage('ID must be an integer'),
        body('description').optional().notEmpty().withMessage('Description is required if provided'),
        body('order').optional().isInt().withMessage('Order must be an integer if provided'),
        body('scenePartId').optional().isInt().withMessage('ScenePart ID must be an integer if provided')
    ],
    getById: [
        param('id').isInt().withMessage('ID must be an integer')
    ]
};

module.exports = actionValidator;
