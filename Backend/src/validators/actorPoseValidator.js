const { check } = require('express-validator');

const actorPoseValidator = {
    create: [
        check('sceneId')
            .notEmpty()
            .withMessage('Scene ID is required')
            .isInt({ min: 1 })
            .withMessage('Scene ID must be an integer greater than 0'),
        check('pose')
            .notEmpty()
            .withMessage('Pose is required')
            .isString()
            .withMessage('Pose must be a string')
    ],
    update: [
        check('pose')
            .optional()
            .isString()
            .withMessage('Pose must be a string')
    ]
};

module.exports = actorPoseValidator;
