const { Sequelize } = require('sequelize');
    const dbHost = process.env.DB_HOST;
    const dbPort = process.env.DB_PORT;

const sequelize = new Sequelize("scripts_management_db", "usuario_admin", "usuario0123", {
    host: dbHost,
    port: dbPort,
    dialect: 'postgres',
});

module.exports = sequelize;
