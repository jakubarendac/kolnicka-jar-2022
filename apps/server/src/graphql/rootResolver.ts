import { likeMutation } from "./mutations";
import {
  favoritesQuery,
  isLikedQuery,
  podcastDetailQuery,
  podcastsQuery,
  tokenQuery,
} from "./queries";

const rootReslver = {
  Query: {
    podcasts: podcastsQuery,
    podcastDetail: podcastDetailQuery,
    token: tokenQuery,
    favorites: favoritesQuery,
  },
  Mutation: {
    like: likeMutation,
  },
  Results: {
    is_liked: isLikedQuery,
  },
  PodcastDetailResult: {
    is_liked: isLikedQuery,
  },
};

export default rootReslver;
