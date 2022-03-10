import React from "react";

import LikeButton from "../LikeButton";
import { Podcast } from "./types";

type Props = {
  podcast: Podcast;
};

const PodcastDetail = ({ podcast }: Props) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h2>Podcast: {podcast.title}</h2>
        <LikeButton isLiked={!!podcast.is_liked} podcastId={podcast.id} />
      </div>
      <div style={{ display: "flex" }}>
        <img width="200px" height="200px" src={podcast.image}></img>
        <div style={{ marginLeft: "2rem" }}>
          <h3>Details:</h3>
          <p>{podcast.description}</p>
        </div>
      </div>
      <h3>Episodes:</h3>
      <ul
        style={{
          listStyle: "none",
          padding: 0,
        }}
      >
        {podcast.episodes.map((episode) => {
          return (
            <li
              key={episode.id}
              style={{
                display: "flex",
                alignItems: "center",
                margin: "1rem 0",
              }}
            >
              <div style={{ marginRight: "1rem" }}>
                <audio preload="metadata" controls src={episode.audio}></audio>
              </div>
              <span>{episode.title}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PodcastDetail;
