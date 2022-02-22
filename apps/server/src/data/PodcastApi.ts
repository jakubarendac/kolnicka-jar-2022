import { RESTDataSource, RequestOptions } from "apollo-datasource-rest";

import {
  mapPodcastDetailResult,
  mapPodcastSearchResult,
} from "../utils/helpers";

export class PodcastApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.PODCAST_API_BASE_URL;
  }

  willSendRequest = (request: RequestOptions) => {
    request.headers.set("X-ListenAPI-Key", process.env.PODCAST_API_KEY);
  };

  getSearch = async (q: string) => {
    const result = await this.get("/search", {
      q,
      type: "podcast",
    });

    return mapPodcastSearchResult(result);
  };

  getPodcastDetailById = async (id: string) => {
    const result = await this.get(`/podcasts/${encodeURIComponent(id)}`);

    return mapPodcastDetailResult(result);
  };
}
