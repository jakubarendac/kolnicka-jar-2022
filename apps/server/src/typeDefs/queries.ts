import { gql } from "apollo-server";

export const queries = gql`
  type Query {
    podcasts(q: String!): [Podcast]
    podcastDetail(id: String!): PodcastDetail
  }
`;
