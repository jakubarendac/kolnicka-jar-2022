import { gql } from "apollo-server";

export const episodeType = gql`
  type Episode {
    id: String!
    title: String!
    description: String!
    length: Int!
  }
`;

export const podcastType = gql`
  type Podcast {
    id: String!
    title: String!
    description: String!
    rate: String
  }
`;

export const searchResult = gql`
  type SearchResult {
    podcasts: [Podcast]!
    offset: Int
  }
`;

export const podcastDetailType = gql`
  type PodcastDetail {
    id: String!
    title: String!
    description: String!
    episodes: [Episode]
    next: String
  }
`;
