import { Action } from "./types";

interface SearchQueryArgs {
  q: string;
  next_offset?: number;
}

const searchQuery: Action<SearchQueryArgs> = (_, args, context) => {
  return context.dataSources.podcastData.getSearch(args.q, args.next_offset);
};

export const resolvers = {
  Query: {
    search: searchQuery,
  },
};
