const { check } = require('express-validator');

const sceneValidator = {
    create: [
        check('number')
            .notEmpty()
            .withMessage('Scene number is required')
            .isInt({ min: 1 })
            .withMessage('Scene number must be an integer greater than 0'),
        check('description')
            .optional()
            .isString()
            .withMessage('Description must be a string')
    ],
    update: [
        check('number')
            .optional()
            .isInt({ min: 1 })
            .withMessage('Scene number must be an integer greater than 0'),
        check('description')
            .optional()
            .isString()
            .withMessage('Description must be a string')
    ]
};

module.exports = sceneValidator;
