const { check } = require('express-validator');

const dialogueValidator = {
    create: [
        check('scenePartId')
            .notEmpty()
            .withMessage('ScenePart ID is required')
            .isInt({ min: 1 })
            .withMessage('ScenePart ID must be an integer greater than 0'),
        check('dialogue')
            .notEmpty()
            .withMessage('Dialogue is required')
            .isString()
            .withMessage('Dialogue must be a string')
    ],
    update: [
        check('dialogue')
            .optional()
            .isString()
            .withMessage('Dialogue must be a string')
    ]
};

module.exports = dialogueValidator;
