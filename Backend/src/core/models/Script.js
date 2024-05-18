const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

class Script extends Model {}

Script.init({
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Script'
});

module.exports = Script;
