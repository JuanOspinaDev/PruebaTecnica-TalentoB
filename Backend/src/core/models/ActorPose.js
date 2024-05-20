const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');
const ScenePart = require('./ScenePart');

const ActorPose = sequelize.define('ActorPose', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    scenePartId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'SceneParts', 
            key: 'id',
            onDelete: 'CASCADE', 
            onUpdate: 'CASCADE'
        }
    },
    pose: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true
});

ActorPose.belongsTo(ScenePart, { foreignKey: 'scenePartId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
ScenePart.hasMany(ActorPose, { foreignKey: 'scenePartId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

module.exports = ActorPose;
