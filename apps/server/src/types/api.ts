// Podcast search

export interface PodcastApiSearchResult {
  took: number;
  count: number;
  total: number;
  results: Result[];
  next_offset: number;
}

export interface Result {
  id: string;
  rss: string;
  link: string;
  audio: string;
  image: string;
  itunes_id: number;
  thumbnail: string;
  pub_date_ms: number;
  guid_from_rss: string;
  title_original: string;
  listennotes_url: string;
  audio_length_sec: number;
  explicit_content: boolean;
  title_highlighted: string;
  description_original: string;
  description_highlighted: string;
  transcripts_highlighted: any[];
}

// Podcast detail

export interface PodcastDetailResult {
  id: string;
  rss: string;
  type: string;
  email: string;
  extra: Extra;
  image: string;
  title: string;
  country: string;
  website: string;
  episodes: Episode[];
  language: string;
  genre_ids: number[];
  itunes_id: number;
  publisher: string;
  thumbnail: string;
  is_claimed: boolean;
  description: string;
  looking_for: LookingFor;
  listen_score: number;
  total_episodes: number;
  listennotes_url: string;
  explicit_content: boolean;
  latest_pub_date_ms: number;
  earliest_pub_date_ms: number;
  next_episode_pub_date: number;
  listen_score_global_rank: string;
}

export interface Extra {
  url1: string;
  url2: string;
  url3: string;
  google_url: string;
  spotify_url: string;
  youtube_url: string;
  linkedin_url: string;
  wechat_handle: string;
  patreon_handle: string;
  twitter_handle: string;
  facebook_handle: string;
  instagram_handle: string;
}

export interface Episode {
  id: string;
  link: string;
  audio: string;
  image: string;
  title: string;
  thumbnail: string;
  description: string;
  pub_date_ms: number;
  guid_from_rss: string;
  listennotes_url: string;
  audio_length_sec: number;
  explicit_content: boolean;
  maybe_audio_invalid: boolean;
  listennotes_edit_url: string;
}

export interface LookingFor {
  guests: boolean;
  cohosts: boolean;
  sponsors: boolean;
  cross_promotion: boolean;
}
