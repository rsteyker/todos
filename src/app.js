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

//Un POST para crear una nueva tarea
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

//Un GET para obtener todas las tareas
app.get('/todos', async (req, res) => {
    try {
        const todos = await Todos.findAll({
            attributes: ['id','title', 'description', 'completed']
        });
        res.json(todos);
        
    } catch (error) {
        res.status(400).json(error);
    }
});

//Un GET para obtener una tarea por su id
app.get('/todos/id/:id', async (req, res) => {
    try {
        //Recuperar el parámetro de la ruta
        const { id } = req.params;

        const todos = await Todos.findByPk(id)
        res.json(todos);
        
    } catch (error) {
        res.status(400).json(error);
    }
});

//Un DELETE para eliminar una tarea
app.delete('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Todos.destroy({
            where: { id }
        });
        res.status(204).send();
        
    } catch (error) {
        res.status(400).json(error);
    }
});

//Un PUT para actualizar una tarea
app.put('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, completed } = req.body;
        await Todos.update({title, description, completed}, {
            where: { id }
        });
        res.status(204).send();

    } catch (error) {
        res.status(400).json(error);
    }
});



//Dejar escuchando a nuestro servidor en un puerto
app.listen(8000, () => {
    console.log("Servidor escuchando en el puerto 8000")
});

console.log(process.env);