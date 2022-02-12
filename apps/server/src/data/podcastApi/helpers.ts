import {
  PodcastApiPodcastDetailResultAPI,
  PodcastApiSearchResultAPI,
} from "../../types";

const mapPodcastSearchResult = (result: PodcastApiSearchResultAPI) =>
  result.results?.map((result) => ({
    id: result.id,
    title: result.title_original,
    description: result.description_original,
    score: result.listen_score_global_rank,
  }));

const mapPodcastDetailResult = (result: PodcastApiPodcastDetailResultAPI) => ({
  ...result,
  episodes: result?.episodes?.map((episode) => ({
    ...episode,
    length: episode.audio_length_sec,
  })),
});

export { mapPodcastSearchResult, mapPodcastDetailResult };
