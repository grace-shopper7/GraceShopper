import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => (
  <div id="sidebar-container">
    <div id="sidebar-links">
      <Link to="/">
        <div className="link-name top-link">Books</div>
      </Link>
      <Link to="/authors">
        <div className="link-name">Authors</div>
      </Link>

      <Link to="/genres">
        <div className="link-name">Genres</div>
      </Link>

      <Link to="/cart">
        <div className="link-name">Cart</div>
      </Link>
    </div>
  </div>
);

export default Sidebar;
