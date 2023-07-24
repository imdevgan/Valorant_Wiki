import React from "react";
import { Link } from "react-router-dom";
import "./ContentSelector.css";

function ContentSelector() {
  return (
    <div className="navbar">
      <p className="web-name">Valorant Wiki</p>
      <div className="link-container">
        <Link className="links" to="/">
          Home
        </Link>
        <Link className="links" to="agents">
          Agents
        </Link>
        <Link className="links" to="weapons">
          Weapons
        </Link>
      </div>
    </div>
  );
}

export default ContentSelector;
