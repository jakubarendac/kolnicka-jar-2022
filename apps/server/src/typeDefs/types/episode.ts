import { gql } from "apollo-server";

const episodeType = gql`
  type Episode {
    id: String!
    title: String!
    description: String!
    length: Int!
  }
`;

export default episodeType;
