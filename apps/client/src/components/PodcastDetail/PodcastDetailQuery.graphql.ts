import { gql } from "@apollo/client";

export const PODCAST_DETAIL = gql`
  query PodcastDetail($podcastDetailId: String!) {
    podcastDetail(id: $podcastDetailId) {
      id
      title
      image
      country
      website
      thumbnail
      is_liked
      description
      episodes {
        link
        id
        audio
        image
        title
        description
        thumbnail
      }
    }
  }
`;
