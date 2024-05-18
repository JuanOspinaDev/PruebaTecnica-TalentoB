const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Dialogue = sequelize.define('Dialogue', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    sceneId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Scenes', // Nombre de la tabla que referenciamos
            key: 'id'
        }
    },
    dialogue: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    timestamps: true
});

module.exports = Dialogue;
