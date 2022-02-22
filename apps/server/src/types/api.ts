type PodcastApiSearchResult = {
  id: string;
  title_original: string;
  description_original: string;
  listen_score_global_rank: string;
};

export type PodcastApiSearchResultAPI = {
  results: Array<PodcastApiSearchResult>;
};

type PodcastApiEpisodeResultAPI = {
  id: string;
  title: string;
  description: string;
  audio_length_sec: number;
};

export type PodcastApiPodcastDetailResultAPI = {
  id: string;
  title: string;
  description: string;
  episodes: Array<PodcastApiEpisodeResultAPI>;
};
