import { Action } from "../types";

export interface LoginMutationArgs {
  email: string;
}

export const tokenMutation: Action<LoginMutationArgs> = (_, args, context) => {
  return context.dataSources.database.getUserToken(args.email);
};
