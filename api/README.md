# PhoneCatalogApp api

Simple REST API written in [Node.js](https://nodejs.org/).

* It has 1 endpoint */phones*
* Returns some mobile phones information, such as name, description, available colors, price, ...

To write the API, the following libraries have been used:

* [Express](https://expressjs.com), web framework for Node.js that helps to build a robust set of features for web and mobile applications.
* [GraphQL](https://graphql.org), to provide a query language for our API so the clients can ask for exactly what they need.
* [winston](https://github.com/winstonjs/winston), to log to console and file.

## Possible improvements

* Add a persistent layer for data, such a database
* Add new queries to the API so the front-end (user) can interact with the data (e.g. rate phones, give feedback, ...)
