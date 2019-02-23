/**
 * @file Application entry point.
 */

// First of all, create the LOGGER and make it global to be able to log messages from everywhere in the code
const logger = require('./logger');
global.logger = logger;

const express = require('express');
const graphqlHTTP = require('express-graphql');
const path = require('path');

const schema = require('./graphql/schema');

logger.info('WELCOME TO PhoneCatalogApp!');

// Using express to build the app.
logger.debug('Initializing Express...');
let app = express();

// To solve the following error when requesting from frontend:
//    Access to XMLHttpRequest at 'http://localhost:4000/phones' from origin 'http://localhost:3000' has been blocked by CORS policy:
//    Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource.
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Defining '/phones' endpoint operations
logger.debug('Defining `/phones` endpoint...');
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

// Let express serve the folder containing the images under resources folder with the virtual path prefix '/resources'
logger.info('Serving `resources` folder under `/resources` virtual path prefix...');
const resourcesFolder = path.join(__dirname, '/resources');
app.use('/resources', express.static(resourcesFolder));

// In production mode, serve the web page from the server
if (process.env['NODE_ENV'] === 'production') {
  logger.info('Serving `client` folder...');
  app.use(express.static(path.join(__dirname, 'client')));
}

app.get('*', function(req, res) {
  if (process.env['NODE_ENV'] === 'production') {
    // In production mode, serve the web page from the server
    res.sendFile(path.join(__dirname, 'client', 'index.html'));
  } else {
    res.send(
      "You're running development mode.<br>Run <strong><code>npm run production</code></strong> to serve the web page."
    );
  }
});

// API will listen at port 4000
app.listen(4000, () => {
  logger.info('Running a GraphQL API server at localhost:4000/phones');
  logger.info('PhoneCatalogApp API listening on port 4000!');
});
