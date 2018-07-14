const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {
    if (err)
        return console.log('Unable to connect to MongoDB server');
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    //  deleteMany
    db.collection('Todos').findOneAndUpdate({
        text: 'Pay my bills'
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log('Result: ', JSON.stringify(result, undefined, 2));
    }, err => {
        console.log('Error: ', err);
    });

    client.close();
});
