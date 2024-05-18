const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');
const Script = require('./Script');

const Version = sequelize.define('Version', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    scriptId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Scripts',
            key: 'id'
        }
    },
    content: {
        type: DataTypes.JSON,
        allowNull: false
    },
    versionNumber: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: true
});

Script.hasMany(Version, { foreignKey: 'scriptId' });
Version.belongsTo(Script, { foreignKey: 'scriptId' });

module.exports = Version;
