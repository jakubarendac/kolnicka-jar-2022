import { likeMutation } from "./mutations";
import {
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
  },
  Mutation: {
    like: likeMutation,
  },
  Results: {
    is_liked: isLikedQuery,
  },
};

export default rootReslver;
