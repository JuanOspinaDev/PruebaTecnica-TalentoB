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
            key: 'id'
        }
    }
}, {
    sequelize,
    modelName: 'Action'
});

Action.belongsTo(ScenePart, { foreignKey: 'scenePartId' });
ScenePart.hasMany(Action, { foreignKey: 'scenePartId' });

module.exports = Action;
