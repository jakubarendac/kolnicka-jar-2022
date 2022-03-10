import { useLazyQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDebouncedCallback } from "use-debounce";

import PodcastList from "../components/PodcastList";
import { PODCAST_LIST } from "../components/PodcastList/PodcastListQuery.graphql";
import {
  PodcastListResponse,
  PodcastListVariables,
} from "../components/PodcastList/types";

const Podcasts = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchString = searchParams.get("search") || "";

  const [fetchPodcasts, { data, loading, error, fetchMore }] = useLazyQuery<
    PodcastListResponse,
    PodcastListVariables
  >(PODCAST_LIST);

  useEffect(() => {
    if (searchString) {
      fetchPodcasts({
        variables: {
          q: searchString,
        },
      });
    }
  }, []);

  const debouncedFetch = useDebouncedCallback((value: string) => {
    fetchPodcasts({
      variables: {
        q: value,
      },
    });
  }, 500);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    debouncedFetch.cancel;

    if (value) {
      debouncedFetch(value);
      setSearchParams({ search: value }, { replace: true });
    } else {
      setSearchParams({}, { replace: true });
    }
  };

  const handleFetchMore = () => {
    if (!data) {
      return null;
    }

    fetchMore({
      variables: {
        offset: data.podcasts.next_offset,
      },
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search Podcasts..."
        style={{
          width: "100%",
          fontSize: "1.2rem",
          padding: "0.5rem",
          margin: "1rem 0",
        }}
        value={searchString}
        onChange={handleSearchChange}
      />
      {data && searchString && (
        <>
          <PodcastList podcasts={data.podcasts.results} />
          <button
            style={{
              padding: "0.5rem 1rem",
              background: "none",
              fontSize: "1.2rem",
              border: "1px solid #ccc",
              borderRadius: "0.5rem",
            }}
            onClick={handleFetchMore}
          >
            Load more
          </button>
        </>
      )}
      {loading && <p>Loading...</p>}
      {error && <p>Oh no, something went wrong...</p>}
    </div>
  );
};

export default Podcasts;
