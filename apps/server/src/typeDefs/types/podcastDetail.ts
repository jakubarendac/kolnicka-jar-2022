import { gql } from "apollo-server";

const podcastDetailType = gql`
  type PodcastDetail {
    id: String!
    title: String!
    description: String!
    episodes: [Episode]
  }
`;

export default podcastDetailType;
