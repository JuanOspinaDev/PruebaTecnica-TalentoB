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
            key: 'id'
        }
    }
}, {
    sequelize,
    modelName: 'Script'
});

Script.belongsTo(User, { foreignKey: 'guionistaId' });
User.hasMany(Script, { foreignKey: 'guionistaId' });

module.exports = Script;
