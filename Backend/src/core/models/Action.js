const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/database');
const ScenePart = require('./ScenePart');

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
    scenePartId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'SceneParts',
            key: 'id',
            onDelete: 'CASCADE', 
            onUpdate: 'CASCADE'
        }
    }
}, {
    sequelize,
    modelName: 'Action'
});

Action.belongsTo(ScenePart, { foreignKey: 'scenePartId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
ScenePart.hasMany(Action, { foreignKey: 'scenePartId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

module.exports = Action;
