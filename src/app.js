//Importamos express
const express = require('express');
const db = require('./utils/database');
const Users = require('./models/users.models');

//Creamos la instancia

//Ejecutar el método authenticate
db.authenticate() //ES un método asincrono
    .then(() => console.log('Base de datos conectada...'))
    .catch(err => console.error(err));

const app = express();

//Generamos una ruta app.get
app.get('/', (req, res) => {
    res.send('Servidor funcionando...')
});

app.get('/users', async (req, res, next) => {
    
    try {
        //Pedir la información a la db
        const users = await Users.findAll();

        //Responder con la información de la bd
        res.json(users);

    } catch (error) {
        next(error);
    }

})

//Dejar escuchando a nuestro servidor en un puerto
app.listen(8000, () => {
    console.log("Servidor escuchando en el puerto 8000")
});