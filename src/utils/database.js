//Importa sequelize
  const { Sequelize } = require('sequelize');

//Crear una instancia de sequelize en la configuración de conexión
const db = new Sequelize({
    host: "localhost",
    database: "course_register",
    port: 5432,
    username: "postgres",
    password: "root",
    dialect: "postgres",
});

module.exports = db;