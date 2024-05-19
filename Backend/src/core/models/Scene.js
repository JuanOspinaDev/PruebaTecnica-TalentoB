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
    sceneId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Scenes',
            key: 'id'
        }
    }
}, {
    sequelize,
    modelName: 'Scene'
});

Scene.belongsTo(Script, { foreignKey: 'scriptId' });
Script.hasMany(Scene, { foreignKey: 'scriptId' });

module.exports = Scene;
