/**
 * @file Application entry point.
 */

const express = require('express');
const graphqlHTTP = require('express-graphql');
const path = require('path');

const logger = require('./logger');
const schema = require('./graphql/schema');

// Make logger global to be used along all the application.
global.logger = logger;

logger.info('WELCOME TO PhoneCatalogApp!');

// Using express to build the app.
let app = express();

// To solve the following error when requesting from frontend:
//    Access to XMLHttpRequest at 'http://localhost:4000/phones' from origin 'http://localhost:3000' has been blocked by CORS policy:
//    Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource.
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Defining '/phones' endpoint GET operation
app.get(
  '/phones',
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
);

// Defining '/phones' endpoint POST operation
app.post(
  '/phones',
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
);

// Let express serve the folder containing the images under resources folder
// with the virtual path prefix '/resources'
const resourcesFolder = path.join(__dirname, '/resources');
app.use('/resources', express.static(resourcesFolder));

// In production mode, serve the web page from the server
// if (process.env['NODE_ENV'] === 'production') {
//   logger.info('Running production versin of the app');

//   // Let express serve the web page under public folder
//   // const clientFolder = path.join(__dirname, '/public');
//   // app.use(express.static(clientFolder));

//   // const clientFolder = path.join(__dirname, '/client');

//   // app.get('/', (req, res) => {
//   //   console.log('Request web');
//   //   res.sendFile(path.join(clientFolder, '/index.html'));
//   // });
//   // console.log('PRODUCTION RUNNING! Client served from %o', path.resolve(clientFolder, 'index.html'));
// }

// API will listen at port 4000
app.listen(4000, () => {
  logger.info('PhoneCatalogApp API listening on port 4000!');
  logger.info('Running a GraphQL API server at localhost:4000/phones');
});
