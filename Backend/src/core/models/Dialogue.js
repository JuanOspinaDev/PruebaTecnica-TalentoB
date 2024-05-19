const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/database');
const ScenePart = require('./ScenePart');

class Dialogue extends Model {}

Dialogue.init({
    dialogue: {
        type: DataTypes.STRING,
        allowNull: false
    },
    order: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    annotation: {
        type: DataTypes.STRING,
        allowNull: true
    },
    characterId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    scenePartId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'SceneParts',
            key: 'id',
            onDelete: 'CASCADE', // Elimina Dialogue cuando se elimina un ScenePart
            onUpdate: 'CASCADE'
        }
    }
}, {
    sequelize,
    modelName: 'Dialogue'
});

Dialogue.belongsTo(ScenePart, { foreignKey: 'scenePartId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
ScenePart.hasMany(Dialogue, { foreignKey: 'scenePartId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

module.exports = Dialogue;
