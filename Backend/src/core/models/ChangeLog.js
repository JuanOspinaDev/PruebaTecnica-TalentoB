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
            key: 'id'
        }
    },
    scriptId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Scripts',
            key: 'id'
        }
    }
}, {
    sequelize,
    modelName: 'ChangeLog'
});

ChangeLog.belongsTo(User, { foreignKey: 'userId' });
ChangeLog.belongsTo(Script, { foreignKey: 'scriptId' });
User.hasMany(ChangeLog, { foreignKey: 'userId' });
Script.hasMany(ChangeLog, { foreignKey: 'scriptId' });

module.exports = ChangeLog;
