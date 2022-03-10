import { gql } from "@apollo/client";

export const FAVORITES = gql`
  query Favorites {
    favorites {
      id
      title
      is_liked
    }
  }
`;
