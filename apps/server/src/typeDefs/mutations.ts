import { gql } from "apollo-server";

export const mutations = gql`
  type Mutation {
    like(podcastId: String!): Boolean!
  }
`;
