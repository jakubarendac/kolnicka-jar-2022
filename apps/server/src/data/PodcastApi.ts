import { RESTDataSource, RequestOptions } from "apollo-datasource-rest";

import { PodcastApiSearchResult } from "../types/api";

export class PodcastApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.PODCAST_API_BASE_URL;
  }

  willSendRequest = (request: RequestOptions) => {
    request.headers.set("X-ListenAPI-Key", process.env.PODCAST_API_KEY);
  };

  getSearch = async (q: string, offset?: number) => {
    const result = (await this.get(`/search`, {
      q,
      type: "podcast",
      offset,
    })) as PodcastApiSearchResult;

    return result;
  };

  getPodcastDetailById = async (id: string, next?: string) => {
    const result = await this.get(`/podcasts/${encodeURIComponent(id)}`, {
      next,
    });

    return result;
  };
}
