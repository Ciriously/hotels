import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import SearchResults from "./Pages/SearchResults"; // Import the SearchResults component

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchResults />} />{" "}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
