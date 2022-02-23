import { AuthenticationError } from "apollo-server";
import { Action } from "../types";

// Podcast search query

interface PodcastsQueryArgs {
  q: string;
  offset: number;
}

export const podcastsQuery: Action<PodcastsQueryArgs> = async (
  _,
  { q, offset },
  { dataSources, user }
) => {
  if (!user) {
    throw new AuthenticationError("Unauthorized");
  }

  return dataSources.podcastApi.getSearch(q, offset);
};

// Podcast detail query

interface PodcastDetailQueryArgs {
  id: string;
  next?: string;
}

export const podcastDetailQuery: Action<PodcastDetailQueryArgs> = async (
  _,
  { id, next },
  { dataSources, user }
) => {
  if (!user) {
    throw new AuthenticationError("Unauthorized");
  }
  return dataSources.podcastApi.getPodcastDetailById(id, next);
};
