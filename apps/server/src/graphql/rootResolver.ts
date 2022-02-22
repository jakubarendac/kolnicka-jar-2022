import { podcastDetailQuery, podcastsQuery } from "./queries";

const rootReslver = {
  Query: {
    podcasts: podcastsQuery,
    podcastDetail: podcastDetailQuery,
  },
};

export default rootReslver;
