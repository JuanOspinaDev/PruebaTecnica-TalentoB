const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

class Actor extends Model {}

Actor.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    sequelize,
    modelName: 'Actor'
});

module.exports = Actor;
