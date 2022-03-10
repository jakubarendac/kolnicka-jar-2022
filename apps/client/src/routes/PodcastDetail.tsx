import { gql, useQuery } from "@apollo/client";
import React from "react";
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

const PodcastDetail = () => {
  const params = useParams<Params>();

  const { data } = useQuery<PodcastDetailResponse, PodcastDetailVariables>(
    PODCAST_DETAIL,
    {
      variables: {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        podcastDetailId: params.podcastId!,
      },
    }
  );

  return (
    <div>
      <ul>
        {data?.podcastDetail.episodes.map((episode) => {
          return <li key={episode.id}>{episode.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default PodcastDetail;
