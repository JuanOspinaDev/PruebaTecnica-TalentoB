const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/database');
const ScenePart = require('./ScenePart');

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
    scenePartId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'SceneParts',
            key: 'id',
            onDelete: 'CASCADE', 
            onUpdate: 'CASCADE'
        }
    }
}, {
    sequelize,
    modelName: 'ActorLocation'
});

ActorLocation.belongsTo(ScenePart, { foreignKey: 'scenePartId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
ScenePart.hasMany(ActorLocation, { foreignKey: 'scenePartId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

module.exports = ActorLocation;
