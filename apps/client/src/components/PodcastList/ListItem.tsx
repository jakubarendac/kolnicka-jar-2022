import React from "react";
import { Link } from "react-router-dom";

import LikeButton from "../LikeButton";

type Props = {
  title: string;
  isLiked: boolean;
  id: string;
};

const PodcastListItem = ({ title, isLiked, id }: Props) => {
  return (
    <li
      style={{
        display: "flex",
        alignItems: "center",
        borderBottom: "1px solid #ccc",
      }}
    >
      <LikeButton isLiked={isLiked} podcastId={id} />
      <Link
        style={{ display: "block", margin: "1.5rem 0 1.5rem 1rem" }}
        to={`/podcasts/${id}`}
      >
        {title}
      </Link>
    </li>
  );
};

export default PodcastListItem;
