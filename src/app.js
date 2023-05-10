//Importamos express
const express = require('express');
const db = require('./utils/database');
const Todos = require('./models/todos.model');


//Creamos la instancia

//Ejecutar el método authenticate
db.authenticate() //ES un método asincrono
    .then(() => console.log('Base de datos conectada...'))
    .catch(err => console.error(err));

//Sincronizar mi bd
db.sync()
  .then(() => console.log('Base de datos sincronizada'))
  .catch((error) => console.log(error));

const app = express();

//Sirve para extraer en json
app.use(express.json());

//Generamos una ruta app.get
app.get('/', (req, res) => {
    res.send('Servidor funcionando...')
});

//
app.post('/todos', async (req, res) => {
    try {
        //Extraemos el cuerpo de la petición
        const newTodos = req.body;

        //Insertamos valores
        await Todos.create(newTodos);

        //Repondemos con un 201 = created
        res.status(201).send();

    } catch (error) {
        res.status(400).json(error);
    }
});


//Dejar escuchando a nuestro servidor en un puerto
app.listen(8000, () => {
    console.log("Servidor escuchando en el puerto 8000")
});