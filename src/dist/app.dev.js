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
}); //Un POST para crear una nueva tarea

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
}); //Un GET para obtener todas las tareas

app.get('/todos', function _callee2(req, res) {
  var todos;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(Todos.findAll({
            attributes: ['id', 'title', 'description', 'completed']
          }));

        case 3:
          todos = _context2.sent;
          res.json(todos);
          _context2.next = 10;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          res.status(400).json(_context2.t0);

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
}); //Un GET para obtener una tarea por su id

app.get('/todos/id/:id', function _callee3(req, res) {
  var id, todos;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          //Recuperar el parámetro de la ruta
          id = req.params.id;
          _context3.next = 4;
          return regeneratorRuntime.awrap(Todos.findByPk(id));

        case 4:
          todos = _context3.sent;
          res.json(todos);
          _context3.next = 11;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          res.status(400).json(_context3.t0);

        case 11:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 8]]);
}); //Un DELETE para eliminar una tarea

app["delete"]('/todos/:id', function _callee4(req, res) {
  var id;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          id = req.params.id;
          _context4.next = 4;
          return regeneratorRuntime.awrap(Todos.destroy({
            where: {
              id: id
            }
          }));

        case 4:
          res.status(204).send();
          _context4.next = 10;
          break;

        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](0);
          res.status(400).json(_context4.t0);

        case 10:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 7]]);
}); //Un PUT para actualizar una tarea

app.put('/todos/:id', function _callee5(req, res) {
  var id, _req$body, title, description, completed;

  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          id = req.params.id;
          _req$body = req.body, title = _req$body.title, description = _req$body.description, completed = _req$body.completed;
          _context5.next = 5;
          return regeneratorRuntime.awrap(Todos.update({
            title: title,
            description: description,
            completed: completed
          }, {
            where: {
              id: id
            }
          }));

        case 5:
          res.status(204).send();
          _context5.next = 11;
          break;

        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](0);
          res.status(400).json(_context5.t0);

        case 11:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 8]]);
}); //Dejar escuchando a nuestro servidor en un puerto

app.listen(8000, function () {
  console.log("Servidor escuchando en el puerto 8000");
});
console.log(process.env);
//# sourceMappingURL=app.dev.js.map
