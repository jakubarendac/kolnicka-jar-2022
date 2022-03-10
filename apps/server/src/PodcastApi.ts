import { RESTDataSource, RequestOptions } from "apollo-datasource-rest";
import { ValueOrPromise } from "apollo-server-types";

export class PodcastDataSource extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.PODCAST_API_BASE_URL;
  }

  protected willSendRequest(request: RequestOptions): ValueOrPromise<void> {
    request.headers.set("X-ListenAPI-Key", process.env.PODCAST_API_KEY);
  }

  public async getSearch(searchString: string, offset?: number) {
    const result = await this.get("search", {
      q: searchString,
      offset: offset,
      type: "podcast",
    });

    return result;
  }

  public async getPodcast(id: string, next?: number) {
    const result = await this.get(`podcasts/${id}`, {
      next_episode_pub_date: next,
    });

    return result;
  }
}
