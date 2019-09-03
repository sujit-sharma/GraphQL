const express = require('express');
const bodyParser = require('body-parser');
const graphqlHTTP = require('express-graphql');
const graphqlschema = require('./schema');
const graphqlresolver = require('./resolver');

const app = express();

// bind express with graphql
app.use('/graphql', graphqlHTTP({
    schema: graphqlschema,
    rootValue: graphqlresolver

}));

app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});