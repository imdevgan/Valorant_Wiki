import React from "react";
import { useState } from "react";

import FetchApi from "../Content/FetchApi";

function Bundles() {
  const [data, SetData] = useState([]);
  return (
    <div>
      <FetchApi url="https://valorant-api.com/v1/playercards" setData={SetData} />
      {console.log(data)}
      {data.map((i) => {
        return (
          <div>
            <p>{i.displayName}</p>
            <img src={i.largeArt} alt="" />
          </div>
        );
      })}
      Bundles
    </div>
  );
}

export default Bundles;
