import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import { getAuthorizationToken } from "../auth";

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_APOLLO_SERVER_URL || "http://localhost:4000/",
});

const authLink = setContext((_, { headers }) => {
  const token = getAuthorizationToken();

  return {
    headers: {
      ...headers,
      authorization: token || "",
    },
  };
});

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        podcasts: {
          keyArgs: false,
          merge(existing = { results: [] }, incomming) {
            return {
              ...existing,
              ...incomming,
              results: [...existing.results, ...incomming.results],
            };
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
});

export default client;
