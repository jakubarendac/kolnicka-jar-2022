import path from "path";

import JSONDB from "simple-json-db";
import { DataSource, DataSourceConfig } from "apollo-datasource";

import { IContext } from "./types";

export class UserDataSource extends DataSource {
  context: IContext;
  public readonly db: JSONDB;

  constructor() {
    super();
    this.db = new JSONDB(path.join(__dirname, "data", "userdata.json"));
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
}
