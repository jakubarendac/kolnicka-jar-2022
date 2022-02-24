import { AuthenticationError } from "apollo-server";

import { Action, Result } from "../types";

// Podcast search query

interface PodcastsQueryArgs {
  q: string;
  offset: number;
}

export const podcastsQuery: Action<PodcastsQueryArgs> = async (
  _,
  { q, offset },
  { dataSources, userToken }
) => {
  if (!userToken) {
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
  { dataSources, userToken }
) => {
  if (!userToken) {
    throw new AuthenticationError("Unauthorized");
  }
  return dataSources.podcastApi.getPodcastDetailById(id, next);
};

// token query

export interface LoginQueryArgs {
  userName: string;
}

export const tokenQuery: Action<LoginQueryArgs> = (_, args, context) => {
  return context.dataSources.database.getUserToken(args.userName);
};

// is liked
export const isLikedQuery: Action<undefined, Result> = (
  podcast,
  _,
  context
) => {
  if (!context.userToken) {
    throw new AuthenticationError("Unauthorized");
  }

  const user = context.dataSources.database.getUserByToken(context.userToken);
  return user.likes.includes(podcast.id);
};
