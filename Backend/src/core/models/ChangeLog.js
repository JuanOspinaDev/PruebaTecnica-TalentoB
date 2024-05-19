const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/database');
const User = require('./User');
const Script = require('./Script');

class ChangeLog extends Model {}

ChangeLog.init({
    entity: {
        type: DataTypes.STRING,
        allowNull: false
    },
    changeType: {
        type: DataTypes.STRING,
        allowNull: false
    },
    changeDetails: {
        type: DataTypes.JSONB,
        allowNull: false
    },
    timestamp: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Users',
            key: 'id',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        }
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    scriptId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Scripts',
            key: 'id',
            onDelete: 'CASCADE', // Elimina ChangeLogs cuando se elimina un Script
            onUpdate: 'CASCADE'
        }
    }
}, {
    sequelize,
    modelName: 'ChangeLog',
});

ChangeLog.belongsTo(User, { foreignKey: 'userId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
ChangeLog.belongsTo(Script, { foreignKey: 'scriptId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
User.hasMany(ChangeLog, { foreignKey: 'userId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
Script.hasMany(ChangeLog, { foreignKey: 'scriptId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

module.exports = ChangeLog;
