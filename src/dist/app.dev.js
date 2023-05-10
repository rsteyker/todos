"use strict";

//Importamos express
var express = require('express');

var db = require('./utils/database');

var Todos = require('./models/todos.model'); //Creamos la instancia
//Ejecutar el método authenticate


db.authenticate() //ES un método asincrono
.then(function () {
  return console.log('Base de datos conectada...');
})["catch"](function (err) {
  return console.error(err);
}); //Sincronizar mi bd

db.sync().then(function () {
  return console.log('Base de datos sincronizada');
})["catch"](function (error) {
  return console.log(error);
});
var app = express(); //Sirve para extraer en json

app.use(express.json()); //Generamos una ruta app.get

app.get('/', function (req, res) {
  res.send('Servidor funcionando...');
}); //

app.post('/todos', function _callee(req, res) {
  var newTodos;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          //Extraemos el cuerpo de la petición
          newTodos = req.body; //Insertamos valores

          _context.next = 4;
          return regeneratorRuntime.awrap(Todos.create(newTodos));

        case 4:
          //Repondemos con un 201 = created
          res.status(201).send();
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          res.status(400).json(_context.t0);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
}); //Dejar escuchando a nuestro servidor en un puerto

app.listen(8000, function () {
  console.log("Servidor escuchando en el puerto 8000");
});
//# sourceMappingURL=app.dev.js.map
