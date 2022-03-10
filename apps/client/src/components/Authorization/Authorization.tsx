import { useLazyQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { useAuthorization } from "../../contexts/AuthorizationContext";
import { AUTHORIZATION } from "./Authorization.graphql";
import { LoginResponse } from "./types";

type Location = {
  state: {
    from: {
      pathname: string;
    } | null;
  } | null;
};

const Authorization = () => {
  const { login } = useAuthorization();
  const navigate = useNavigate();
  const location = useLocation() as Location;

  const from = location.state?.from?.pathname || "/";

  const [username, setUsername] = useState("");

  const [authorize, { loading, data }] =
    useLazyQuery<LoginResponse>(AUTHORIZATION);

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setUsername(value);
  };

  const handleLoginClick = () => {
    authorize({
      variables: {
        username,
      },
    });
  };

  useEffect(() => {
    if (data) {
      login(data.token, () => navigate(from, { replace: true }));
    }
  }, [data]);

  return (
    <div
      style={{
        margin: "2rem",
        display: "flex",
        padding: "1rem 0",
        width: "50%",
      }}
    >
      <input
        type="text"
        value={username}
        style={{
          width: "100%",
          fontSize: "1.2rem",
          padding: "0.5rem",
          border: "1px solid #ccc",
          borderRadius: "8px 0 0 8px",
          borderRight: "none",
        }}
        onChange={handleUsernameChange}
      ></input>
      <button
        style={{
          padding: "0 0.5rem",
          background: "none",
          fontSize: "1.2rem",
          border: "1px solid #ccc",
          borderRadius: "0 8px 8px 0",
        }}
        onClick={handleLoginClick}
        disabled={loading}
      >
        Login
      </button>
    </div>
  );
};

export default Authorization;
