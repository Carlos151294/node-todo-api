const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {
    if (err)
        return console.log('Unable to connect to MongoDB server');
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').find({
    //     // completed: false
    //     _id: new ObjectID('5b490cd56dccb1f8ec079c7c')
    // }).toArray().then((docs) => {
    //     console.log('Todos:\n', JSON.stringify(docs, undefined, 2));
    // }, err => {
    //     console.log('Unable to fetch Todos: ', err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log('Todos count: ', count);
    // }, err => {
    //     console.log('Unable to fetch Todos: ', err);
    // });

    db.collection('Users').find({
        name: 'Carlos'
    }).toArray().then((docs) => {
            console.log('Todos:\n', JSON.stringify(docs, undefined, 2));
    }, err => {
        console.log('Unable to fetch Todos: ', err);
    });
    client.close();
});
