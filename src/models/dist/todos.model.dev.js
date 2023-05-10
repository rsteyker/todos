"use strict";

var db = require("../utils/database");

var _require = require("sequelize"),
    DataTypes = _require.DataTypes;

var Todos = db.define('todos', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING(40),
    allowNull: false
  },
  description: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  completed: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
});
module.exports = Todos;
//# sourceMappingURL=todos.model.dev.js.map
