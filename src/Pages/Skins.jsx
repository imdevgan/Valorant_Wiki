import "./Skins.css";
import React from "react";
import { useState } from "react";

import FetchApi from "../Content/FetchApi";

function Skins() {
  const [data, SetData] = useState([]);
  return (
    <div>
      <FetchApi url="https://valorant-api.com/v1/weapons" setData={SetData} />
      {console.log(data)}
      {data.map((i) => {
        return (
          <div>
            <p>{i.displayName}</p>
            {i.skins.map((j) => {
              return (
                <div>
                  <p>{j.displayName}</p>
                  <img className="skins-img" src={j.displayIcon} alt="" />
                  {j.chromas.map((k) => {
                    return <div className="skins-display"></div>;
                  })}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Skins;
