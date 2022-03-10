export type Podcast = {
  id: string;
  title: string;
  image: string;
  country: string;
  website: string;
  thumbnail: string;
  description: string;
  episodes: Episode[];
  is_liked?: boolean;
};

export type Episode = {
  link: string;
  id: string;
  audio: string;
  image: string;
  title: string;
  description: string;
  thumbnail: string;
};

export type PodcastDetailVariables = {
  podcastDetailId: string;
  next?: string;
};

export type PodcastDetailResponse = {
  podcastDetail: Podcast;
};
