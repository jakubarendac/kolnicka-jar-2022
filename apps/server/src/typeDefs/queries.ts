import { gql } from "apollo-server";

export const queries = gql`
  type Query {
    podcasts(q: String!, offset: Int): SearchResult
    podcastDetail(id: String!, next: String): PodcastDetail
  }
`;
