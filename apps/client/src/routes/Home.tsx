import { gql, useLazyQuery } from "@apollo/client";
import React, { useState } from "react";

const SEARCH = gql`
  query Search($q: String!) {
    search(q: $q) {
      results {
        id
        is_favorite
        title_original
      }
      next_offset
    }
  }
`;

type Result = {
  id: string;
  title_original: string;
  is_favorite: boolean;
};

type SearchResponse = {
  results: Result[];
};

type SearchVariables = {
  q: string;
};

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const [search, { data: searchData }] = useLazyQuery<
    SearchResponse,
    SearchVariables
  >(SEARCH, {
    variables: {
      q: searchText,
    },
  });

  console.log({ searchData });

  const handleSearchTextChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;

    setSearchText(value);
  };

  const handleSearchClick = () => {
    search();
  };

  return (
    <div>
      <h1>Home</h1>
      <input value={searchText} onChange={handleSearchTextChange}></input>
      <button onClick={handleSearchClick}>Search</button>
    </div>
  );
};

export default Home;
