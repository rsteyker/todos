"use strict";

//Importamos el db 
var db = require('../utils/database'); //Importamos el y DataTypes


var _require = require('sequelize'),
    DataTypes = _require.DataTypes; //Definimos un modelo


var Users = db.define("users", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(40),
    allowNull: false
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false
  }
}, {
  timestamps: false
});
module.exports = Users;
//# sourceMappingURL=users.models.dev.js.map
