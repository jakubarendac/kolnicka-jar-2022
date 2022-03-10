import { gql } from "apollo-server";

export const ResultsType = gql`
  type Results {
    rss: String
    description_highlighted: String
    description_original: String
    title_highlighted: String
    title_original: String
    publisher_highlighted: String
    publisher_original: String
    image: String
    thumbnail: String
    itunes_id: Int
    latest_pub_date_ms: Int
    earliest_pub_date_ms: Int
    id: String
    listennotes_url: String
    total_episodes: Int
    email: String
    explicit_content: Boolean
    website: String
    listen_score: String
    listen_score_global_rank: String
    genre_ids: [Int]
  }
`;

export const SearchResultType = gql`
  type SearchResult {
    count: Int
    next_offset: Int
    total: Int
    took: Float
    results: [Results]
  }
`;

export const Query = gql`
  type Query {
    search(q: String!, next_offset: Int): SearchResult!
    # podcastDetail(id: String!):
  }
`;

export const typeDefs = [SearchResultType, ResultsType, Query];
