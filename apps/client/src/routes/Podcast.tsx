import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";

import PodcastDetail from "../components/PodcastDetail";
import { PODCAST_DETAIL } from "../components/PodcastDetail/PodcastDetailQuery.graphql";
import {
  PodcastDetailResponse,
  PodcastDetailVariables,
} from "../components/PodcastDetail/types";

const Podcast = () => {
  const params = useParams();

  const { data, loading, error } = useQuery<
    PodcastDetailResponse,
    PodcastDetailVariables
  >(PODCAST_DETAIL, {
    variables: {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      podcastDetailId: params.podcastId!,
    },
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Oh no, something went wrong...</p>;
  }

  if (!data) {
    return <p>No data...</p>;
  }

  return <PodcastDetail podcast={data.podcastDetail} />;
};

export default Podcast;
