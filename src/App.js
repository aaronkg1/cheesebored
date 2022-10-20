import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SiteNavbar from "./components/SiteNavbar";
import Home from "./components/Home";
import CheeseIndex from "./components/CheeseIndex";

function App() {
  return (
    <div className="site-wrapper">
      <BrowserRouter>
        <SiteNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cheeses" element={<CheeseIndex />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
