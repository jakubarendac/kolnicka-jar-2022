import { gql } from "apollo-server";

export const mutations = gql`
  type Mutation {
    token(email: String!): String
  }
`;
