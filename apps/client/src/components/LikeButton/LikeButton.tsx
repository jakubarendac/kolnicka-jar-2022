import { useMutation } from "@apollo/client";
import React, { useState } from "react";

import Like from "../../assets/icons/Like";
import { LikePodcastResponse } from "./types";
import { LIKE_PODCAST } from "./LikePodcastMutation.grapql";

type Props = {
  isLiked: boolean;
  podcastId: string;
};

const LikeButton = ({ isLiked: isLikedInitialState, podcastId }: Props) => {
  const [isLiked, setIsLiked] = useState(isLikedInitialState);

  const [like] = useMutation<LikePodcastResponse>(LIKE_PODCAST);

  const likePodcast = () => {
    setIsLiked((state) => !state);
    like({
      variables: {
        podcastId,
      },
    });
  };

  return (
    <button
      onClick={likePodcast}
      style={{
        display: "flex",
        alignItems: "center",
        fontSize: 24,
        border: "none",
        background: "none",
      }}
    >
      <Like fill={isLiked ? "red" : "black"} />
    </button>
  );
};

export default LikeButton;
