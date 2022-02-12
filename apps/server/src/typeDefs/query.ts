import { gql } from "apollo-server";

const query = gql`
  type Query {
    podcasts(q: String!): [Podcast]
    podcastDetail(id: String!): PodcastDetail
  }
`;

export default query;
