import "dotenv/config";
import { ApolloServer } from "apollo-server";
import { Request } from "express";

import { typeDefs } from "./typedefs";
import { PodcastDataSource } from "./PodcastApi";
import { resolvers } from "./resolvers";
import { UserDataSource } from "./UserDataSource";

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.

const userDataSource = new UserDataSource();

const server = new ApolloServer({
  typeDefs,
  context: ({ req }: { req: Request }) => {
    const token = req.headers.authorization;

    const user = userDataSource.getUserByToken(token);

    if (user) {
      return { user: user };
    }
  },
  dataSources: () => ({
    podcastData: new PodcastDataSource(),
    userData: userDataSource,
  }),
  resolvers: resolvers,
});

// The `listen` method launches a web server.
server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
