const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/database');
const Script = require('./Script');

class Scene extends Model {}

Scene.init({
    number: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    scriptId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Scripts',
            key: 'id',
            onDelete: 'CASCADE', // Elimina Scene cuando se elimina un Script
            onUpdate: 'CASCADE'
        }
    }
}, {
    sequelize,
    modelName: 'Scene'
});

Scene.belongsTo(Script, { foreignKey: 'scriptId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
Script.hasMany(Scene, { foreignKey: 'scriptId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

module.exports = Scene;
