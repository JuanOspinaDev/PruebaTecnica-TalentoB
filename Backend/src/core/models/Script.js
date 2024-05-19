const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/database');
const User = require('./User'); 

class Script extends Model {}

Script.init({
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    guionistaId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Users',
            key: 'id',
            onDelete: 'CASCADE', // Elimina Script cuando se elimina un User
            onUpdate: 'CASCADE'
        }
    }
}, {
    sequelize,
    modelName: 'Script'
});

Script.belongsTo(User, { foreignKey: 'guionistaId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
User.hasMany(Script, { foreignKey: 'guionistaId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

module.exports = Script;
