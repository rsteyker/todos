//Importamos el db 
const db = require('../utils/database');

//Importamos el y DataTypes
const { DataTypes } = require('sequelize');

//Definimos un modelo
const Users = db.define("users",  {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(40),
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
},
{
    timestamps: false,
}
);


module.exports = Users;




