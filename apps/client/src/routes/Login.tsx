import { gql, useLazyQuery } from "@apollo/client";
import React, { useState } from "react";

import { TOKEN } from "..";

const LOGIN = gql`
  query Login($userName: String!) {
    login(userName: $userName)
  }
`;

const setAuthorizationToken = (token: string) => {
  localStorage.setItem(TOKEN, token);
};

type AuthorizationVariables = {
  userName: string;
};

type AuthorizationResponse = {
  login: string;
};

const Login = () => {
  const [login, setLogin] = useState("");

  const [authorize] = useLazyQuery<
    AuthorizationResponse,
    AuthorizationVariables
  >(LOGIN, {
    variables: {
      userName: login,
    },
    onCompleted: (data) => {
      setAuthorizationToken(data.login);
    },
  });

  const handleLoginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setLogin(value);
  };

  const handleLoginClick = () => {
    authorize();
  };

  return (
    <div>
      <h1>Login</h1>
      <input value={login} onChange={handleLoginChange}></input>
      <button onClick={handleLoginClick}>Login</button>
    </div>
  );
};

export default Login;
