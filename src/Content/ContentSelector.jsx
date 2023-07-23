import React from "react";
import {Link} from "react-router-dom";

function ContentSelector({setContent}) {
  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="agents">Agents</Link>
        <Link to="bundles">Bundles</Link>
        <Link to="weapons">Weapons</Link>
        <Link to="skins">Skins</Link>
    </div>
  );
}

export default ContentSelector;
