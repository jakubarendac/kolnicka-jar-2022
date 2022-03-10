import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./routes/Home";
import Login from "./routes/Login";
import PodcastDetail from "./routes/PodcastDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/podcasts/:podcastId" element={<PodcastDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
