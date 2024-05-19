const { check } = require('express-validator');

const scriptValidator = {
    create: [
        check('title').notEmpty().withMessage('Title is required'),
        check('genre').notEmpty().withMessage('Genre is required'),
        check('director').optional().notEmpty().withMessage('Director is required if provided'),
    ],
    update: [
        check('title').optional().notEmpty().withMessage('Title is required if provided'),
        check('genre').optional().notEmpty().withMessage('Genre is required if provided'),
        check('director').optional().notEmpty().withMessage('Director is required if provided'),
    ]
};

module.exports = scriptValidator;
