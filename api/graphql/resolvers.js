/**
 * @file Definitions of the resolvers to build GraphQL schema.
 * @see {@link https://www.apollographql.com/docs/graphql-tools/resolvers.html|GraphQL resolvers}
 */

const phones = require('../phones/phones');

module.exports = {
  // Define resolvers as a nested object that maps type and field names to resolver functions
  Query: {
    // query the information of all the phones
    phones: () => phones,
    // query the information of a phone by its id
    phone: (_, { id }) => phones.find(phone => phone.id === id)
  }
};
