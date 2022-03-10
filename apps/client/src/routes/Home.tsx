import { gql, useLazyQuery } from "@apollo/client";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const SEARCH = gql`
  query Search($q: String!, $next_offset: Int) {
    search(q: $q, next_offset: $next_offset) {
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
  search: {
    next_offset: number;
    results: Result[];
  };
};

type SearchVariables = {
  q: string;
  next_offset?: number;
};

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const [search, { data: searchData, fetchMore }] = useLazyQuery<
    SearchResponse,
    SearchVariables
  >(SEARCH, {
    variables: {
      q: searchText,
    },
  });

  const handleSearchTextChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;

    setSearchText(value);
  };

  const handleSearchClick = () => {
    search();
  };

  const handleFetchMoreClick = () => {
    if (!searchData) {
      return null;
    }

    fetchMore({
      variables: {
        next_offset: searchData.search.next_offset,
      },
    });
  };

  return (
    <div>
      <h1>Home</h1>
      <input value={searchText} onChange={handleSearchTextChange}></input>
      <button onClick={handleSearchClick}>Search</button>
      {searchData && (
        <>
          <ul>
            {searchData.search.results.map((result) => {
              return (
                <li key={result.id}>
                  <Link to={`/podcasts/${result.id}`}>
                    {result.title_original}
                  </Link>
                </li>
              );
            })}
          </ul>
          <button onClick={handleFetchMoreClick}>Fetch more</button>
        </>
      )}
    </div>
  );
};

export default Home;
