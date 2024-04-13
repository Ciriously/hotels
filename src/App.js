import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Hero from "./components/shared/hero";
import TrendingProperties from "./components/TrendingProperties";
import ScrollCards from "./components/ui/ScrollCards";
import SponsoredHS from "./components/SponsoredHomestays";
import Explore from "./components/Explore";
import Features from "./components/Features";

function App() {
  return (
    <Router>
      <div>
        <Hero />
        <TrendingProperties />
        <SponsoredHS />
        <Features />
        <Explore />
      </div>
    </Router>
  );
}

export default App;
