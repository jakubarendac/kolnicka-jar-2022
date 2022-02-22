import { PodcastApi } from "../data/PodcastApi";

export interface ResolverContext {
  dataSources: {
    podcastApi: PodcastApi;
  };
}

export type Query<Args = unknown, Parent = unknown, Result = unknown> = (
  parent: Parent,
  args: Args,
  context: ResolverContext
) => Result;
