import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => (
  <div id="sidebar-container">
    <div id="sidebar-links">
      <Link to="/genres"><div className="link-name">Genres</div></Link>
      <Link to="/authors"><div className="link-name">Authors</div></Link>
    </div>
  </div>
)

export default Sidebar
