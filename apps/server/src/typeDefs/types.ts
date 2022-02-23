import { gql } from "apollo-server";

export const SearchResult = gql`
  type Podcast {
    id: String!
    image: String!
    thumbnail: String!
    listen_score: Int!
    title_original: String!
    listennotes_url: String!
    title_highlighted: String!
    publisher_original: String!
    publisher_highlighted: String!
    listen_score_global_rank: String!
    genre_ids: [Int]!
  }

  type Results {
    id: String!
    rss: String!
    link: String!
    audio: String!
    image: String!
    itunes_id: Int!
    thumbnail: String!
    pub_date_ms: Int!
    guid_from_rss: String!
    title_original: String!
    listennotes_url: String!
    audio_length_sec: Int!
    explicit_content: Boolean!
    title_highlighted: String!
    description_original: String!
    description_highlighted: String!
    transcripts_highlighted: [String]!
    podcast: Podcast!
  }

  type SearchResult {
    took: Float!
    count: Int!
    total: Int!
    next_offset: Int!
    results: [Results]!
  }
`;

export const podcastDetailResult = gql`
  type LookingFor {
    guests: Boolean!
    cohosts: Boolean!
    sponsors: Boolean!
    cross_promotion: Boolean!
  }

  type Episodes {
    id: String!
    link: String!
    audio: String!
    image: String!
    title: String!
    thumbnail: String!
    description: String!
    pub_date_ms: Int!
    guid_from_rss: String!
    listennotes_url: String!
    audio_length_sec: Int!
    explicit_content: Boolean!
    maybe_audio_invalid: Boolean!
    listennotes_edit_url: String!
  }

  type Extra {
    url1: String!
    url2: String!
    url3: String!
    google_url: String!
    spotify_url: String!
    youtube_url: String!
    linkedin_url: String!
    wechat_handle: String!
    patreon_handle: String!
    twitter_handle: String!
    facebook_handle: String!
    instagram_handle: String!
  }

  type PodcastDetailResult {
    id: String!
    rss: String!
    type: String!
    email: String!
    image: String!
    title: String!
    country: String!
    website: String!
    language: String!
    itunes_id: Int!
    publisher: String!
    thumbnail: String!
    is_claimed: Boolean!
    description: String!
    listen_score: Int!
    total_episodes: Int!
    listennotes_url: String!
    explicit_content: Boolean!
    latest_pub_date_ms: Int!
    earliest_pub_date_ms: Int!
    next_episode_pub_date: Int!
    listen_score_global_rank: String!
    looking_for: LookingFor!
    genre_ids: [Int]!
    episodes: [Episodes]!
    extra: Extra!
  }
`;
