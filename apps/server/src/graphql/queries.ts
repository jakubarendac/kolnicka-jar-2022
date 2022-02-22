import { Query } from "../types";

// Podcast search query

interface PodcastsQueryArgs {
  q: string;
  offset: number;
}

export const podcastsQuery: Query<PodcastsQueryArgs> = async (
  _,
  { q, offset },
  { dataSources }
) => dataSources.podcastApi.getSearch(q, offset);

// Podcast detail query

interface PodcastDetailQueryArgs {
  id: string;
  next?: string;
}

export const podcastDetailQuery: Query<PodcastDetailQueryArgs> = async (
  _,
  { id, next },
  { dataSources }
) => dataSources.podcastApi.getPodcastDetailById(id, next);
