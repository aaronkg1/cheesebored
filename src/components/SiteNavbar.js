import React from "react";
import { Link } from "react-router-dom";

const SiteNavbar = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="cheeses">Cheeses</Link>
      </li>
    </ul>
  );
};

export default SiteNavbar;
