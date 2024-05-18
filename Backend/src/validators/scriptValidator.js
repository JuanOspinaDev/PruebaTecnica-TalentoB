const { check } = require('express-validator');

const scriptValidator = {
    create: [
        check('title').notEmpty().withMessage('Title is required'),
        check('genre').notEmpty().withMessage('Genre is required'),
        check('content').notEmpty().withMessage('Content is required')
    ],
    update: [
        check('title').optional().notEmpty().withMessage('Title is required if provided'),
        check('genre').optional().notEmpty().withMessage('Genre is required if provided'),
        check('content').optional().notEmpty().withMessage('Content is required if provided')
    ]
};

module.exports = scriptValidator;
