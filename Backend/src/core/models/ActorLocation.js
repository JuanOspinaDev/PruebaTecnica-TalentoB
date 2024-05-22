const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/database');
const Scene = require('./Scene');

class ActorLocation extends Model {}

ActorLocation.init({
    x: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    y: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    z: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    rotationX: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    rotationY: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    rotationZ: {
        type: DataTypes.FLOAT,
        allowNull: false
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
    }
}, {
    sequelize,
    modelName: 'ActorLocation'
});

ActorLocation.belongsTo(Scene, { foreignKey: 'sceneId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
Scene.hasMany(ActorLocation, { foreignKey: 'sceneId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

module.exports = ActorLocation;
