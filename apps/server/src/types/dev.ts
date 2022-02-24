import { Database } from "../data/Database";
import { PodcastApi } from "../data/PodcastApi";

export interface ResolverContext {
  userToken?: string;
  dataSources: {
    podcastApi: PodcastApi;
    database: Database;
  };
}

export type Action<Args = unknown, Parent = unknown, Result = unknown> = (
  parent: Parent,
  args: Args,
  context: ResolverContext
) => Result;
