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
            key: 'id',
            onDelete: 'CASCADE', 
            onUpdate: 'CASCADE'
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

ScenePart.belongsTo(Scene, { foreignKey: 'sceneId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
Scene.hasMany(ScenePart, { foreignKey: 'sceneId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

module.exports = ScenePart;
