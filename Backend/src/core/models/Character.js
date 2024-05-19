const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/database');
const Actor = require('./Actor');

class Character extends Model {}

Character.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    actorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Actors',
            key: 'id',
            onDelete: 'CASCADE', // Elimina Characters cuando se elimina un Actor
            onUpdate: 'CASCADE'
        }
    }
}, {
    sequelize,
    modelName: 'Character'
});

Character.belongsTo(Actor, { foreignKey: 'actorId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
Actor.hasMany(Character, { foreignKey: 'actorId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

module.exports = Character;
