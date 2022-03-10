import React from "react";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import client from "./apollo";
import { AuthorizationProvider } from "./contexts/AuthorizationContext";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Podcast from "./routes/Podcast";
import Podcasts from "./routes/Podcasts";
import Favorites from "./routes/Favarites";
import AuthorizationProtected from "./components/AuthorizationProtected/AuthorizationProtected";

function App() {
  return (
    <AuthorizationProvider>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <AuthorizationProtected>
                  <Home />
                </AuthorizationProtected>
              }
            >
              <Route path="/podcasts" element={<Podcasts />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/podcasts/:podcastId" element={<Podcast />}></Route>
            </Route>
            <Route path="/login" element={<Login />} />
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>Nothing here!</p>
                </main>
              }
            />
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
    </AuthorizationProvider>
  );
}

export default App;
