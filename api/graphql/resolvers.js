/**
 * @file Definitions of the resolvers to build GraphhQl schema.
 */

const phones = require('../data');

module.exports = {
  Query: {
    phones: () => phones
  }
};