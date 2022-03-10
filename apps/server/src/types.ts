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

// Dev
interface IContext {
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
