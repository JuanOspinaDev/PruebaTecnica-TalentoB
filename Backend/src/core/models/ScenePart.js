const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/database');
const Scene = require('./Scene');

class ScenePart extends Model {}

ScenePart.init({
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    sceneId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Scenes',
            key: 'id'
        }
    },
    order: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'ScenePart'
});

ScenePart.belongsTo(Scene, { foreignKey: 'sceneId' });
Scene.hasMany(ScenePart, { foreignKey: 'sceneId' });

module.exports = ScenePart;
