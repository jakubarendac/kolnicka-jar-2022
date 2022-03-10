import path from "path";

import JSONDB from "simple-json-db";
import { DataSource, DataSourceConfig } from "apollo-datasource";

import { IContext, IUser } from "./types";

export class UserDataSource extends DataSource {
  context: IContext;
  public readonly db: JSONDB;

  constructor() {
    super();
    this.db = new JSONDB(path.join(__dirname, "data", "userdata.jsondb"));
  }

  override initialize(
    config: DataSourceConfig<IContext>
  ): void | Promise<void> {
    this.context = config.context;
  }

  getUserToken(userName: string) {
    if (this.db.has(userName)) {
      return this.db.get(userName);
    } else {
      const newToken = Date.now().toString();

      this.db.set(userName, newToken);
      this.db.set(newToken, {
        userName: userName,
        token: newToken,
        podcast: [],
      });

      return newToken;
    }
  }

  getUserByToken(token: string): IUser | null | undefined {
    return this.db.get(token);
  }

  async togglePodcastFavorite(id: string): Promise<boolean> {
    if (!this.context.user) {
      return;
    }

    const podcast = this.context.user?.podcast.find((p) => p.id === id);

    if (podcast) {
      this.db.set(this.context.user.token, {
        ...this.context.user,
        podcast: this.context.user.podcast.filter((p) => p.id !== id),
      });

      return false;
    } else {
      const podcastDetail =
        await this.context.dataSources.podcastData.getPodcast(id);

      this.context.user.podcast.push(podcastDetail);

      this.db.set(this.context.user.token, this.context.user);

      return true;
    }
  }
}
