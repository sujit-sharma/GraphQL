const express = require('express');
const bodyParser = require('body-parser');
const graphqlHTTP = require('express-graphql');
const graphqlschema = require('./schema');
const graphqlresolver = require('./resolver');
const mongoose = require('mongoose');

const MongoDB_URI = 
'mongodb+srv://dbpractice:Dhakal123@cluster0-fseez.mongodb.net/dbpractice'; //?retryWrites=true&w=majority';

const app = express();

// bind express with graphql
app.use('/graphql', graphqlHTTP({
    schema: graphqlschema,
    rootValue: graphqlresolver,
    graphiql: true

}));




mongoose
.connect(MongoDB_URI)
.then(result => {
    app.listen(11000);
})
    
.catch(err => {
    console.log(err);
});