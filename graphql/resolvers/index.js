const postResolvers = require("./post");
const userResolvers = require("./user");

module.exports = {
  Query: {
    ...postResolvers,
  },
  Mutation: {
    ...userResolvers,
  },
};
