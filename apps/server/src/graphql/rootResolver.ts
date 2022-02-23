import { tokenMutation } from "./mutations";
import { podcastDetailQuery, podcastsQuery } from "./queries";

const rootReslver = {
  Query: {
    podcasts: podcastsQuery,
    podcastDetail: podcastDetailQuery,
  },
  Mutation: {
    token: tokenMutation,
  },
};

export default rootReslver;
