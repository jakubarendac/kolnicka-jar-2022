import "dotenv/config";
import { ApolloServer } from "apollo-server";

import resolvers from "./graphql";
import typeDefs from "./typeDefs";
import { PodcastApi } from "./data";
import { Database } from "./data/Database";

const init = async () => {
  const db = new Database();
  // The ApolloServer constructor requires two parameters: your schema
  // definition and your set of resolvers.
  const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
    introspection: true,
    context: ({ req }) => {
      const token = req.headers.authorization;

      if (db.db.has(token)) {
        return { userToken: token };
      }
    },
    dataSources: () => ({
      podcastApi: new PodcastApi(),
      database: db,
    }),
  });

  // The `listen` method launches a web server.
  server.listen({ port: process.env.PORT }).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
};

init();
