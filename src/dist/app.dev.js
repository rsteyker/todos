"use strict";

//Importamos express
var express = require('express');

var db = require('./utils/database');

var Users = require('./models/users.models'); //Creamos la instancia
//Ejecutar el método authenticate


db.authenticate() //ES un método asincrono
.then(function () {
  return console.log('Base de datos conectada...');
})["catch"](function (err) {
  return console.error(err);
});
var app = express(); //Generamos una ruta app.get

app.get('/', function (req, res) {
  res.send('Servidor funcionando...');
});
app.get('/users', function _callee(req, res, next) {
  var users;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(Users.findAll());

        case 3:
          users = _context.sent;
          //Responder con la información de la bd
          res.json(users);
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          next(_context.t0);

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
