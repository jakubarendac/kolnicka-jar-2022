import React from "react";

import PodcastListItem from "./ListItem";
import { Result } from "./types";

type Props = {
  podcasts: Array<Result>;
};

const PodcastList = ({ podcasts }: Props) => {
  return (
    <ul
      style={{
        listStyle: "none",
        padding: 0,
        marginTop: 0,
      }}
    >
      {podcasts.map(({ id, title_original, is_liked }) => {
        return (
          <PodcastListItem
            key={id}
            title={title_original}
            id={id}
            isLiked={!!is_liked}
          />
        );
      })}
    </ul>
  );
};

export default PodcastList;
