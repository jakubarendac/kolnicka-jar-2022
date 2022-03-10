import React, { useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";

import logo from "./logo.svg";
import "./App.css";
import { TOKEN } from "./index";

const LOGIN = gql`
  query Login($userName: String!) {
    login(userName: $userName)
  }
`;

const SEARCH = gql`
  query Search($q: String!) {
    search(q: $q) {
      results {
        id
        is_favorite
        title_original
      }
      next_offset
    }
  }
`;

const setAuthorizationToken = (token: string) => {
  localStorage.setItem(TOKEN, token);
};

type Result = {
  id: string;
  title_original: string;
  is_favorite: boolean;
};

type SearchResponse = {
  results: Result[];
};

type SearchVariables = {
  q: string;
};

type AuthorizationVariables = {
  userName: string;
};

type AuthorizationResponse = {
  login: string;
};

function App() {
  const [login, setLogin] = useState("");
  const [searchText, setSearchText] = useState("");

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

  const [search, { data: searchData }] = useLazyQuery<
    SearchResponse,
    SearchVariables
  >(SEARCH, {
    variables: {
      q: searchText,
    },
  });

  console.log({ searchData });

  const handleLoginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setLogin(value);
  };

  const handleLoginClick = () => {
    authorize();
  };

  const handleSearchTextChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;

    setSearchText(value);
  };

  const handleSearchClick = () => {
    search();
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <input value={login} onChange={handleLoginChange}></input>
        <button onClick={handleLoginClick}>Login</button>

        <input value={searchText} onChange={handleSearchTextChange}></input>
        <button onClick={handleSearchClick}>Search</button>
      </header>
    </div>
  );
}

export default App;
