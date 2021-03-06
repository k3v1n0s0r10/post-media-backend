const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers/index");
const { MONGODB } = require("./config");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req }),
});

mongoose
  .connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    return server.listen({ port: process.env.PORT || 5000 });
  })
  .then((res) => {
    console.log(`server running at ${res.url}`);
  })
  .catch((err) => {
    console.log(err);
  });
