import { Action } from "./types";

interface SearchQueryArgs {
  q: string;
  next_offset?: number;
}

const searchQuery: Action<SearchQueryArgs> = (_, args, context) => {
  return context.dataSources.podcastData.getSearch(args.q, args.next_offset);
};

interface PodcastDetailArgs {
  id: string;
}

const podcastDetailQuery: Action<PodcastDetailArgs> = (_, args, context) => {
  return context.dataSources.podcastData.getPodcast(args.id);
};

export const resolvers = {
  Query: {
    search: searchQuery,
    podcastDetail: podcastDetailQuery,
  },
};
