/**
 * @file Definition of the GraphQL schema.
 * @see {@link https://www.apollographql.com/docs/graphql-tools/generate-schema.html|GraphQL schema}
 */

const { makeExecutableSchema } = require('graphql-tools');

const resolvers = require('./resolvers');

// Describe the schema as a GraphQL type language string
const typeDefs = `
  # Definition of Phone type
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
  #   phones: to query the information of all the phones
  #   phone: to query the information of a phone by its id
  type Query {
    phones: [Phone]
    phone(id: Int!): Phone
  }
`;

// Combine the schema and resolvers
module.exports = makeExecutableSchema({
  typeDefs,
  resolvers
});
