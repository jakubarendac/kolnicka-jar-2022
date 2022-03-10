import { gql } from "@apollo/client";

export const AUTHORIZATION = gql`
  query Authorization($username: String!) {
    token(userName: $username)
  }
`;
