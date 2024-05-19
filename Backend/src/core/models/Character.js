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
            key: 'id'
        }
    }
}, {
    sequelize,
    modelName: 'Character'
});

Character.belongsTo(Actor, { foreignKey: 'actorId' });
Actor.hasMany(Character, { foreignKey: 'actorId' });

module.exports = Character;
