import { AuthenticationError } from "apollo-server";

import { Action, PodcastDetail, Result } from "./types";

interface SearchQueryArgs {
  q: string;
  next_offset?: number;
}

const searchQuery: Action<SearchQueryArgs> = (_, args, context) => {
  if (!context.user) {
    throw new AuthenticationError("Unauthorized");
  }

  return context.dataSources.podcastData.getSearch(args.q, args.next_offset);
};

interface PodcastDetailArgs {
  id: string;
  next_episode_pub_date?: number;
}

const podcastDetailQuery: Action<PodcastDetailArgs> = (_, args, context) => {
  if (!context.user) {
    throw new AuthenticationError("Unauthorized");
  }

  return context.dataSources.podcastData.getPodcast(
    args.id,
    args.next_episode_pub_date
  );
};

interface LoginArgs {
  userName: string;
}

const loginQuery: Action<LoginArgs> = (_, args, context) => {
  return context.dataSources.userData.getUserToken(args.userName);
};

interface FavoriteArgs {
  id: string;
}

const favoriteMutation: Action<FavoriteArgs> = (_, args, context) => {
  if (!context.user) {
    throw new AuthenticationError("Unauthorized");
  }

  return context.dataSources.userData.togglePodcastFavorite(args.id);
};

const isFavoriteFieldQuery: Action<unknown, PodcastDetail | Result> = (
  parent,
  _,
  context
) => {
  return context.user.podcast.some((podcast) => podcast.id === parent.id);
};

const favoritesQuery: Action = (_, __, context) => {
  if (!context.user) {
    throw new AuthenticationError("Unauthorized");
  }

  return context.user.podcast;
};

export const resolvers = {
  Query: {
    search: searchQuery,
    podcastDetail: podcastDetailQuery,
    login: loginQuery,
    favorites: favoritesQuery,
  },
  Mutation: {
    favorite: favoriteMutation,
  },
  PodcastDetail: {
    is_favorite: isFavoriteFieldQuery,
  },
  Results: {
    is_favorite: isFavoriteFieldQuery,
  },
};
