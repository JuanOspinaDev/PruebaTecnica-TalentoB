const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/database');
const Scene = require('./Scene');

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
    character: {
        type: DataTypes.STRING,
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
    modelName: 'Dialogue'
});

Dialogue.belongsTo(Scene, { foreignKey: 'sceneId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
Scene.hasMany(Dialogue, { foreignKey: 'sceneId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

module.exports = Dialogue;
