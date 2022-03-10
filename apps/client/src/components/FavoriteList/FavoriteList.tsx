import React from "react";

import PodcastListItem from "../PodcastList/ListItem";
import { Favorites } from "./types";

type Props = {
  podcasts: Array<Favorites>;
};

const FavoriteList = ({ podcasts }: Props) => {
  return (
    <ul
      style={{
        listStyle: "none",
        padding: 0,
      }}
    >
      {podcasts.map(({ id, title, is_liked }) => (
        <PodcastListItem key={id} title={title} id={id} isLiked={!!is_liked} />
      ))}
    </ul>
  );
};

export default FavoriteList;
