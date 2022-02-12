import "dotenv/config";
import { ApolloServer } from "apollo-server";

import PodcastApi from "./data/podcastApi";
import resolvers from "./resolvers";
import typeDefs from "./typeDefs";

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
  dataSources: () => ({
    podcastApi: new PodcastApi(),
  }),
});

// The `listen` method launches a web server.
server.listen({ port: process.env.PORT }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
