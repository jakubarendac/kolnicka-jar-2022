import { PodcastDataSource } from "./PodcastApi";

export interface SearchResult {
  count: number;
  next_offset: number;
  total: number;
  took: number;
  results: Result[];
}

export interface Result {
  rss: string;
  description_highlighted: string;
  description_original: string;
  title_highlighted: string;
  title_original: string;
  publisher_highlighted: string;
  publisher_original: string;
  image: string;
  thumbnail: string;
  itunes_id: number;
  latest_pub_date_ms: number;
  earliest_pub_date_ms: number;
  id: string;
  genre_ids: number[];
  listennotes_url: string;
  total_episodes: number;
  email: string;
  explicit_content: boolean;
  website: string;
  listen_score: string;
  listen_score_global_rank: string;
}

// Podcast Detail

export interface PodcastDetail {
  id: string;
  title: string;
  publisher: string;
  image: string;
  thumbnail: string;
  listennotes_url: string;
  listen_score: string;
  listen_score_global_rank: string;
  total_episodes: number;
  explicit_content: boolean;
  description: string;
  itunes_id: number;
  rss: string;
  latest_pub_date_ms: number;
  earliest_pub_date_ms: number;
  language: string;
  country: string;
  website: string;
  extra: Extra;
  is_claimed: boolean;
  email: string;
  type: string;
  looking_for: LookingFor;
  genre_ids: number[];
  episodes: Episode[];
  next_episode_pub_date: number;
}

export interface Extra {
  twitter_handle: string;
  facebook_handle: string;
  instagram_handle: string;
  wechat_handle: string;
  patreon_handle: string;
  youtube_url: string;
  linkedin_url: string;
  spotify_url: string;
  google_url: string;
  url1: string;
  url2: string;
  url3: string;
}

export interface LookingFor {
  sponsors: boolean;
  guests: boolean;
  cohosts: boolean;
  cross_promotion: boolean;
}

export interface Episode {
  id: string;
  title: string;
  description: string;
  pub_date_ms: number;
  audio: string;
  audio_length_sec: number;
  listennotes_url: string;
  image: string;
  thumbnail: string;
  maybe_audio_invalid: boolean;
  listennotes_edit_url: string;
  explicit_content: boolean;
  link: string;
  guid_from_rss: string;
}

// Dev
export interface IContext {
  dataSources: {
    podcastData: PodcastDataSource;
  };
}

export type Action<A = unknown, P = unknown, R = unknown> = (
  parent: P,
  args: A,
  context: IContext,
  info: unknown
) => R;

export interface IUser {
  userName: string;
  token: string;
  podcast: PodcastDetail[];
}
