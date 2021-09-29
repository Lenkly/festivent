import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { resolvers, typeDefs } from './graphql/festivalSchema';

const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require('apollo-server-core');

const PORT = process.env.PORT || 3500;
const app = express();

async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  });
  await server.start();
  server.applyMiddleware({ app });
}

startServer();

app.get('/', (req, res) => {
  res.send({ hello: 'there!' });
});

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}/graphql`);
});
