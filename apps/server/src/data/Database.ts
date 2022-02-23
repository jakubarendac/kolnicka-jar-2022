import path from "path";

import { DataSource, DataSourceConfig } from "apollo-datasource";
import Realm from "realm";

import { ResolverContext } from "../types";

export class User {
  public static schema: Realm.ObjectSchema = {
    name: "User",
    primaryKey: "userName",
    properties: {
      userName: "string",
      token: "string",
      likes: "string[]",
    },
  };

  userName: string;
  token: string;
  likes: string[];
}

export const initRealm = () => {
  return Realm.open({
    path: path.join(__dirname, "localdata"),
    schema: [User],
  });
};

export class Database extends DataSource {
  context: ResolverContext;
  realm: Realm;

  override async initialize(config: DataSourceConfig<ResolverContext>) {
    this.context = config.context;
    this.realm = await initRealm();
  }

  getUserToken(userName: string) {
    let user = this.realm.objectForPrimaryKey<User>("User", userName);

    if (!user) {
      this.realm.write(() => {
        user = this.realm.create<User>(User.schema.name, {
          userName: userName,
          token: Date.now().toString(),
          likes: [],
        });
      });
    }

    return user.token;
  }
}
