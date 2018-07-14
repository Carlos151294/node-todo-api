const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {
    if (err)
        return console.log('Unable to connect to MongoDB server');
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    //  deleteMany
    db.collection('Todos').deleteMany({text: 'Tell my nephew a tale'}).then((result) => {
        console.log('Result: ', JSON.stringify(result, undefined, 2));
    }, err => {
        console.log('Error: ', err);
    });

    //  deleteOne
    db.collection('Todos').deleteOne({text: 'Kiss my gf'}).then((result) => {
        console.log('Result: ', JSON.stringify(result, undefined, 2));
    }, err => {
        console.log('Error: ', err);
    });

    //  findOneAndDelete
    db.collection('Todos').findOneAndDelete({completed: true}).then(res => {
        console.log('Result: ', JSON.stringify(res, undefined, 2));
    });

    client.close();
});
