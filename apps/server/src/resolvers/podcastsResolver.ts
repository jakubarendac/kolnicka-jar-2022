import { Podcast } from "../models";

const podcastsResolvers = {
  Query: {
    podcasts: async (_, { q }, { dataSources }) =>
      Podcast.search(dataSources.podcastApi, q),
    podcastDetail: async (_, { id }, { dataSources }) =>
      Podcast.podcastDetail(dataSources.podcastApi, id),
  },
};

export default podcastsResolvers;
