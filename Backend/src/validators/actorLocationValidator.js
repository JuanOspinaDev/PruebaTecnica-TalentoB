const { check } = require('express-validator');

const actorLocationValidator = {
    create: [
        check('sceneId')
            .notEmpty()
            .withMessage('Scene ID is required')
            .isInt({ min: 1 })
            .withMessage('Scene ID must be an integer greater than 0'),
        check('x')
            .notEmpty()
            .withMessage('X coordinate is required')
            .isFloat()
            .withMessage('X coordinate must be a number'),
        check('y')
            .notEmpty()
            .withMessage('Y coordinate is required')
            .isFloat()
            .withMessage('Y coordinate must be a number'),
        check('z')
            .notEmpty()
            .withMessage('Z coordinate is required')
            .isFloat()
            .withMessage('Z coordinate must be a number'),
        check('rotationX')
            .notEmpty()
            .withMessage('Rotation X is required')
            .isFloat()
            .withMessage('Rotation X must be a number'),
        check('rotationY')
            .notEmpty()
            .withMessage('Rotation Y is required')
            .isFloat()
            .withMessage('Rotation Y must be a number'),
        check('rotationZ')
            .notEmpty()
            .withMessage('Rotation Z is required')
            .isFloat()
            .withMessage('Rotation Z must be a number')
    ],
    update: [
        check('x')
            .optional()
            .isFloat()
            .withMessage('X coordinate must be a number'),
        check('y')
            .optional()
            .isFloat()
            .withMessage('Y coordinate must be a number'),
        check('z')
            .optional()
            .isFloat()
            .withMessage('Z coordinate must be a number'),
        check('rotationX')
            .optional()
            .isFloat()
            .withMessage('Rotation X must be a number'),
        check('rotationY')
            .optional()
            .isFloat()
            .withMessage('Rotation Y must be a number'),
        check('rotationZ')
            .optional()
            .isFloat()
            .withMessage('Rotation Z must be a number')
    ]
};

module.exports = actorLocationValidator;

