const express = require('express');
const userRoutes = require('./userRoutes');
const scriptRoutes = require('./scriptRoutes');

const router = express.Router();

router.use('/users', userRoutes);
router.use('/scripts', scriptRoutes);

module.exports = router;
