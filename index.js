const express = require("express");
const app = express();
const expressGraphQL = require("express-graphql");
const { GraphQLSchema } = require("graphql");

const rootQueryType = require("./domain/Query");
const rootMutationType = require("./domain/MutationType");

const schema = new GraphQLSchema({
  query: rootQueryType,
  mutation: rootMutationType,
});
//
app.use(
  "/graphql",
  expressGraphQL({
    schema: schema,
    graphiql: true,
  })
);

app.listen(3000, () => {
  console.log("Server running");
});
