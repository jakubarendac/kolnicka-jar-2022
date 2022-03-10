import "dotenv/config";
import { ApolloServer } from "apollo-server";

import { typeDefs } from "./typedefs";
import { PodcastDataSource } from "./PodcastApi";
import { resolvers } from "./resolvers";

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  dataSources: () => ({
    podcastData: new PodcastDataSource(),
  }),
  resolvers: resolvers,
});

// The `listen` method launches a web server.
server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
