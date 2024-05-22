const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');
const Scene = require('./Scene');

const ActorPose = sequelize.define('ActorPose', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    sceneId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Scenes', 
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

ActorPose.belongsTo(Scene, { foreignKey: 'sceneId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
Scene.hasMany(ActorPose, { foreignKey: 'sceneId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

module.exports = ActorPose;
