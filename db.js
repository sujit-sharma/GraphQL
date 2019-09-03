const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = callback => {
    MongoClient.connect(
        'mongodb+srv://dbpractice:Dhakal123@cluster0-fseez.mongodb.net/test?retryWrites=true&w=majority'
    )
        .then(result => {
        console.log('Database Connected');

    })
        .catch(err => {
            console.log(err);
        });

    };

module.exports = mongoConnect;

