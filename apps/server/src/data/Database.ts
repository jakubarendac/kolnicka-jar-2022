import path from "path";

// @tsignore
import JSONDB from "simple-json-db";
import { DataSource, DataSourceConfig } from "apollo-datasource";

import { PodcastDetailResult, ResolverContext } from "../types";

export interface User {
  userName: string;
  likes: PodcastDetailResult[];
}

export class Database extends DataSource {
  context: ResolverContext;
  db: JSONDB;

  constructor() {
    super();
    this.db = new JSONDB(path.join(__dirname, "localdata.db"));
  }

  override async initialize(config: DataSourceConfig<ResolverContext>) {
    this.context = config.context;
  }

  getUserToken(userName: string) {
    if (this.db.has(userName)) {
      return this.db.get(userName);
    } else {
      const newToken = Date.now().toString();

      this.db.set(userName, newToken as unknown as object);
      this.db.set(newToken, {
        userName,
        likes: [],
      });

      return newToken;
    }
  }

  getUserByToken(token: string) {
    return this.db.get(token) as User;
  }
}
