const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

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
            key: 'id'
        }
    },
    pose: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true
});

module.exports = ActorPose;
