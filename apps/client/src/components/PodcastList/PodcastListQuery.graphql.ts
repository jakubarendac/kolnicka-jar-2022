import { gql } from "@apollo/client";

export const PODCAST_LIST = gql`
  query PodcastList($q: String!, $offset: Int) {
    podcasts(q: $q, offset: $offset) {
      results {
        id
        title_original
        is_liked
      }
      next_offset
    }
  }
`;
