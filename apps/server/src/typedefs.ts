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

// Podcast detail

export const EpisodesType = gql`
  type Episodes {
    id: String
    title: String
    description: String
    pub_date_ms: Int
    audio: String
    audio_length_sec: Int
    listennotes_url: String
    image: String
    thumbnail: String
    maybe_audio_invalid: Boolean
    listennotes_edit_url: String
    explicit_content: Boolean
    link: String
    guid_from_rss: String
  }
`;

export const LookingForType = gql`
  type LookingFor {
    sponsors: Boolean
    guests: Boolean
    cohosts: Boolean
    cross_promotion: Boolean
  }
`;

export const ExtraType = gql`
  type Extra {
    twitter_handle: String
    facebook_handle: String
    instagram_handle: String
    wechat_handle: String
    patreon_handle: String
    youtube_url: String
    linkedin_url: String
    spotify_url: String
    google_url: String
    url1: String
    url2: String
    url3: String
  }
`;

export const PodcastDetailType = gql`
  type PodcastDetail {
    id: String
    title: String
    publisher: String
    image: String
    thumbnail: String
    listennotes_url: String
    listen_score: String
    listen_score_global_rank: String
    total_episodes: Int
    explicit_content: Boolean
    description: String
    itunes_id: Int
    rss: String
    latest_pub_date_ms: Int
    earliest_pub_date_ms: Int
    language: String
    country: String
    website: String
    is_claimed: Boolean
    email: String
    type: String
    next_episode_pub_date: Float
    episodes: [Episodes]
    genre_ids: [Int]
    looking_for: LookingFor
    extra: Extra
  }
`;

// Query
export const Query = gql`
  type Query {
    search(q: String!, next_offset: Int): SearchResult!
    podcastDetail(id: String!): PodcastDetail
  }
`;

export const typeDefs = [
  SearchResultType,
  ResultsType,
  Query,
  PodcastDetailType,
  ExtraType,
  LookingForType,
  EpisodesType,
];
