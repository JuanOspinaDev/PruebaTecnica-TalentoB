const { check } = require('express-validator');

const sceneValidator = {
    create: [
        check('description')
            .optional()
            .isString()
            .withMessage('Description must be a string')
    ],
    update: [
        check('description')
            .optional()
            .isString()
            .withMessage('Description must be a string')
    ]
};

module.exports = sceneValidator;
