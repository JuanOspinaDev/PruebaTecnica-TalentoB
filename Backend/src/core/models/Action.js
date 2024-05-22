const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/database');
const Scene = require('./Scene');

class Action extends Model {}

Action.init({
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    order: {
        type: DataTypes.INTEGER,
        allowNull: false
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
    }
}, {
    sequelize,
    modelName: 'Action'
});

Action.belongsTo(Scene, { foreignKey: 'sceneId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
Scene.hasMany(Action, { foreignKey: 'sceneId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

module.exports = Action;
