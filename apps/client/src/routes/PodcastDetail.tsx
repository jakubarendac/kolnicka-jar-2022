import React from "react";
import { useParams } from "react-router-dom";

const PodcastDetail = () => {
  const params = useParams();

  return <div>{params.podcastId}</div>;
};

export default PodcastDetail;
