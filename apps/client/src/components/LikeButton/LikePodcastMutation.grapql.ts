import { gql } from "@apollo/client";

export const LIKE_PODCAST = gql`
  mutation LikePodcast($podcastId: String!) {
    like(podcastId: $podcastId)
  }
`;
