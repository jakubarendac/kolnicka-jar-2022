import "dotenv/config";
import { ApolloServer, AuthenticationError } from "apollo-server";

import resolvers from "./graphql";
import typeDefs from "./typeDefs";
import { PodcastApi } from "./data";
import { Database, User, initRealm } from "./data/Database";

const init = async () => {
  const realm = await initRealm();
  // The ApolloServer constructor requires two parameters: your schema
  // definition and your set of resolvers.
  const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
    context: ({ req }) => {
      const token = req.headers.authorization;

      const user = realm
        .objects<User>("User")
        .filtered(`token == '${token}'`)[0];

      console.log(user);
      if (user) {
        return { user };
      }
    },
    dataSources: () => ({
      podcastApi: new PodcastApi(),
      database: new Database(),
    }),
  });

  // The `listen` method launches a web server.
  server.listen({ port: process.env.PORT }).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
};

init();
