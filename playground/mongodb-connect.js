// const mongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
// var objID = new ObjectID();
// console.log(objID);

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {
    if (err)
        return console.log('Unable to connect to MongoDB server');
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err)
    //         return console.log(err);
    //     console.log('Result: ', JSON.stringify(result.ops,undefined,2));
    // });

    db.collection('Users').insertOne({
        name: 'Carlos Flores Nava',
        age: 23,
        location: 'Plumoso, La Palma, Cuernavaca'
    }, (err, result) => {
        if (err)
            return console.log(err);
        console.log('Result: ', JSON.stringify(result.ops,undefined,2));
    });

    client.close();
});
