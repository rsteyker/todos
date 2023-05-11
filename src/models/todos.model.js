const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const Todos = db.define('todos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING(40),
        allowNull: false,
        unique: true,
    },
    description: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    completed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    }
},{
    timestamps: false,
});

module.exports = Todos;
