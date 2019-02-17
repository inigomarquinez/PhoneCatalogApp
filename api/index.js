/**
 * @file Application entry point.
 */

const express = require('express');
const graphqlHTTP = require('express-graphql');

const schema = require('./graphql/schema');

// Using express to build the app
const app = express();

// To solve the following error when requesting from frontend:
//    Access to XMLHttpRequest at 'http://localhost:4000/phones' from origin 'http://localhost:3000' has been blocked by CORS policy:
//    Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource.
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Defining '/phones' endpoint
app.get(
  '/phones',
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
);

app.post(
  '/phones',
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
);

// API will listen at port 4000
app.listen(4000);

console.log('Running a GraphQL API server at localhost:4000/phones');
