import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SiteNavbar from "./components/SiteNavbar";
import Home from "./components/Home";
import CheeseIndex from "./components/CheeseIndex";

function App() {
  return (
    <BrowserRouter>
      <SiteNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cheeses" element={<CheeseIndex />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
