import { PodcastApiSearchResult, PodcastDetailResult } from "../types/api";

const mapPodcastSearchResult = (result: PodcastApiSearchResult) => ({
  podcasts: result.results?.map((result) => ({
    id: result.id,
    title: result.title_original,
    description: result.description_original,
  })),
  offset: result.next_offset,
});

const mapPodcastDetailResult = (result: PodcastDetailResult) => ({
  ...result,
  next: result.next_episode_pub_date,
  episodes: result?.episodes?.map((episode) => ({
    ...episode,
    length: episode.audio_length_sec,
  })),
});

export { mapPodcastSearchResult, mapPodcastDetailResult };
