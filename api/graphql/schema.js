/**
 * @file Definition of the GraphQL schema.
 */

const { makeExecutableSchema } = require('graphql-tools');

const resolvers = require('./resolvers');

const typeDefs = `
  type Phone {
    id: Int!,
    brand: String,
    name: String,
    description: String,
    color: String,
    price: String,
    image: String,
    thumbnail: String
  },

  # the schema allows the following query:
  type Query {
    phones: [Phone]
  }
`;

// Create the schema using typeDefs and resolvers
module.exports = makeExecutableSchema({
  typeDefs,
  resolvers
});