import React from "react";
import { Link, Outlet } from "react-router-dom";

import Logout from "../components/Logout";
import { useAuthorization } from "../contexts/AuthorizationContext";

const Home = () => {
  const { token } = useAuthorization();

  return (
    <div style={{ margin: "2rem " }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>Podcasts</h1>
        {token && <Logout></Logout>}
      </div>
      <nav>
        <Link to="/favorites">Favorites</Link> |{" "}
        <Link to="/podcasts">Search</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Home;
