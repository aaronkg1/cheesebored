import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="hero text-center">
    <div className="hero-overlay">
      <h1 className="display-4">🧀 CheeeBored 🧀</h1>
      <p className="lead">
        This site provides information about cheeses from across the globe
      </p>
      <Link to="cheeses" className="btn">
        Discover cheeses
      </Link>
    </div>
  </div>
);

export default Home;
