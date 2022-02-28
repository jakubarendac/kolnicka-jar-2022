import { AuthenticationError } from "apollo-server";

import { Action } from "../types";

export interface LikeMutationArgs {
  podcastId: string;
}

export const likeMutation: Action<LikeMutationArgs> = async (
  _,
  args,
  context
) => {
  if (!context.user) {
    throw new AuthenticationError("Unauthorized");
  }

  if (context.user.likes.some((e) => e.id === args.podcastId)) {
    context.dataSources.database.db.set(context.userToken, {
      ...context.user,
      likes: context.user.likes.filter((e) => e.id !== args.podcastId),
    });

    return false;
  } else {
    const podcast = await context.dataSources.podcastApi.getPodcastDetailById(
      args.podcastId
    );

    context.user.likes.push(podcast);
    context.dataSources.database.db.set(context.userToken, context.user);

    return true;
  }
};
