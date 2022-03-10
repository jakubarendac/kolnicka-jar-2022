import { gql, useMutation, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PODCAST_DETAIL = gql`
  query PodcastDetail($podcastDetailId: String!) {
    podcastDetail(id: $podcastDetailId) {
      id
      image
      is_favorite
      episodes {
        id
        title
        thumbnail
        audio
      }
    }
  }
`;

type Episode = {
  id: string;
  title: string;
  thumbnail: string;
  audio: string;
};

type PodcastDetailResponse = {
  podcastDetail: {
    id: string;
    image: string;
    is_favorite: boolean;
    episodes: Episode[];
  };
};

type PodcastDetailVariables = {
  podcastDetailId: string;
};

type Params = {
  podcastId: string;
};

type FavoriteVariables = {
  favoriteId: string;
};

type FavoriteResponse = {
  favorite: boolean;
};

const FAVORITE = gql`
  mutation Favorite($favoriteId: String!) {
    favorite(id: $favoriteId)
  }
`;

const PodcastDetail = () => {
  const params = useParams<Params>();

  const [mutate] = useMutation<FavoriteResponse, FavoriteVariables>(FAVORITE, {
    variables: {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      favoriteId: params.podcastId!,
    },
    onCompleted: (data) => {
      setLiked(data.favorite);
    },
  });

  const { data } = useQuery<PodcastDetailResponse, PodcastDetailVariables>(
    PODCAST_DETAIL,
    {
      variables: {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        podcastDetailId: params.podcastId!,
      },
    }
  );

  const [isLiked, setLiked] = useState(
    data?.podcastDetail.is_favorite || false
  );

  const handleFavoriteClick = () => {
    // setLiked((state) => !state);
    mutate();
  };

  return (
    <div>
      <button onClick={handleFavoriteClick}>Like</button>
      <span>{isLiked ? "liked" : "disliked"}</span>
      <ul>
        {data?.podcastDetail.episodes.map((episode) => {
          return <li key={episode.id}>{episode.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default PodcastDetail;
