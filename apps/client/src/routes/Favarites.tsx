import { useQuery } from "@apollo/client";
import React from "react";

import FavoriteList from "../components/FavoriteList/FavoriteList";
import { FAVORITES } from "../components/FavoriteList/FavoritesQuery.graphql";

const Favorites = () => {
  const { data, loading, error } = useQuery(FAVORITES);

  return (
    <div style={{ flex: 1 }}>
      {data?.favorites && <FavoriteList podcasts={data.favorites} />}
    </div>
  );
};

export default Favorites;
