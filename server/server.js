const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo.js');
const {User} = require('./models/user');

const app = express();

/**
 * Middleware
 */
app.use(bodyParser.json());

/**
 * Crear un nuevo Todo
 */
app.post('/todos', (req, res) => {
    var todo = new Todo(req.body);
    todo.save().then(resObj => {
        res.send(resObj);
    }, e => { res.status(400).send(e); });
});

/**
 * Listar Todos
 */
app.get('/todos', (req, res) => {
    Todo.find().then( todos => {
        res.send({todos});
    }, e => { res.status(400).send(e); });
});

/**
 * Listar un Todo
 */
app.get('/todos/:id', (req, res) => {
    var id = req.params.id;

    if (!ObjectID.isValid(id))
        return  res.status(404).send('Todo no válido');

    Todo.findById(id).then(todo => {
        res.send({todo});
    }).catch(() => {
        res.send('Todo no válido');
    });


});

app.listen(3000,  () => {
    console.log('Started on port 3000');
});
