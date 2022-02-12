import { gql } from "apollo-server";

const podcastType = gql`
  type Podcast {
    id: String!
    title: String!
    description: String!
    rate: String
  }
`;

export default podcastType;
