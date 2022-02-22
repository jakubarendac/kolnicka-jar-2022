import { Query } from "../types";

// Podcast search query

interface PodcastsQueryArgs {
  q: string;
}

export const podcastsQuery: Query<PodcastsQueryArgs> = async (
  _,
  { q },
  { dataSources }
) => dataSources.podcastApi.getSearch(q);

// Podcast detail query

interface PodcastDetailQueryArgs {
  id: string;
}

export const podcastDetailQuery: Query<PodcastDetailQueryArgs> = async (
  _,
  { id },
  { dataSources }
) => dataSources.podcastApi.getPodcastDetailById(id);
