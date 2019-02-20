/**
 * @file Definition of the GraphQL schema.
 */

const { makeExecutableSchema } = require('graphql-tools');

const resolvers = require('./resolvers');

const typeDefs = `
  type Phone {
    id: Int!,
    brand: String,
    colors: [String],
    description: String,
    images: [String],
    name: String,
    price: String,
    summary: String,
    thumbnail: String,
    web: String,
    year: Int
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
