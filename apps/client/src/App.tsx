import React from "react";
import { gql, useQuery } from "@apollo/client";

import logo from "./logo.svg";
import "./App.css";

const BOOKS = gql`
  query ExampleQuery {
    books {
      title
      author
    }
  }
`;

function Books() {
  const { loading, error, data } = useQuery(BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.books.map(({ title, author }: any) => (
    <div key={title}>
      <p>
        {author}: {title}
      </p>
    </div>
  ));
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          GQL response:
          <Books />
        </div>
      </header>
    </div>
  );
}

export default App;
