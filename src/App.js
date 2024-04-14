import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Hero from "./components/shared/hero";
import TrendingProperties from "./components/TrendingProperties";
import SponsoredHS from "./components/SponsoredHomestays";
import Explore from "./components/Explore";
import Features from "./components/Features";
import SearchContainer from "./components/Searchengine/SearchContainer";
import Footer from "./components/shared/Footer";

function App() {
  return (
    <Router>
      <div>
        <div className="relative">
          <Hero />
          <div className="absolute top-full w-full transform -translate-y-1/2">
            <SearchContainer />
          </div>
        </div>
        <TrendingProperties />
        <SponsoredHS />
        <Features />
        <Explore />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
