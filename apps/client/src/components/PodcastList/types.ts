export type PodcastListVariables = {
  q: string;
  offset?: number | null;
};

export type PodcastListResponse = {
  podcasts: {
    results: Array<Result>;
    next_offset: number;
  };
};

export type Result = {
  id: string;
  title_original: string;
  is_liked?: boolean;
};
