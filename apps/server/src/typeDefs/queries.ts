import { gql } from "apollo-server";

export const queries = gql`
  type Query {
    podcasts(q: String!, offset: Int): SearchResult
    podcastDetail(id: String!, next: String): PodcastDetailResult
    token(userName: String!): String!
    favorites: [PodcastDetailResult]
  }
`;
