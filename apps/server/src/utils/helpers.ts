import { PodcastApiSearchResult, PodcastDetailResult } from "../types/api";

const mapPodcastSearchResult = (result: PodcastApiSearchResult) =>
  result.results?.map((result) => ({
    id: result.id,
    title: result.title_original,
    description: result.description_original,
  }));

const mapPodcastDetailResult = (result: PodcastDetailResult) => ({
  ...result,
  episodes: result?.episodes?.map((episode) => ({
    ...episode,
    length: episode.audio_length_sec,
  })),
});

export { mapPodcastSearchResult, mapPodcastDetailResult };
