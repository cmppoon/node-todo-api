//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Some thing to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err){
    //         return console.log('Unable to insert to do');
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Poon2',
    //     age: 20,
    //     location: 'Bangkok'
    // }, (err,result) => {
    //     if(err){
    //         return console.log('Unable to insert to Users');
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // })
    
    db.close();
});