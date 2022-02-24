import { AuthenticationError } from "apollo-server";

import { Action } from "../types";

export interface LikeMutationArgs {
  podcastId: string;
}

export const likeMutation: Action<LikeMutationArgs> = (_, args, context) => {
  if (!context.userToken) {
    throw new AuthenticationError("Unauthorized");
  }

  const user = context.dataSources.database.getUserByToken(context.userToken);

  if (user.likes.includes(args.podcastId)) {
    context.dataSources.database.db.set(context.userToken, {
      ...user,
      likes: user.likes.filter((e) => e !== args.podcastId),
    });

    return false;
  } else {
    user.likes.push(args.podcastId);
    context.dataSources.database.db.set(context.userToken, user);

    return true;
  }
};
