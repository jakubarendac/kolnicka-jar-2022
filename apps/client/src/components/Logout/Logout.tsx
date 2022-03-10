import { useApolloClient } from "@apollo/client";
import React from "react";
import { useNavigate } from "react-router-dom";

import { useAuthorization } from "../../contexts/AuthorizationContext";

const Logout = () => {
  const navigate = useNavigate();
  const { logout } = useAuthorization();
  const client = useApolloClient();

  const handleLogoutClick = () => {
    logout(() => {
      navigate("/login");
      client.resetStore();
    });
  };

  return (
    <button
      style={{ background: "none", border: "none", fontSize: "1.2rem" }}
      onClick={handleLogoutClick}
    >
      Logout
    </button>
  );
};

export default Logout;
