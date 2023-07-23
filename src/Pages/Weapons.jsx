import "./Weapons.css";
import React from "react";
import { useState } from "react";

import FetchApi from "../Content/FetchApi";
//#3c4447
function Weapons() {
  const [data, SetData] = useState([]);
  return (
    <div className="map">
      <h1 className="heading">Weapons</h1>
      <FetchApi url="https://valorant-api.com/v1/weapons" setData={SetData} />
      {console.log(data)}
      {data.map((i) => {
        if (i.shopData != null)
          return (
            <div className="weapons">
              <div className="f-container">
                <div className="details">
                  <div className="l-container"></div>
                  <h1>{i.displayName}</h1>
                  <p>Cost : {i.shopData.cost}</p>
                  <p>Category : {i.shopData.category}</p>
                  <p>Magazine Size : {i.weaponStats.magazineSize}</p>
                  <p>Fire Rate : {i.weaponStats.fireRate}</p>
                </div>
                <img className="weapons-img" src={i.displayIcon} />
              </div>
              <div className="stats">
                <table>
                  <tr>
                    <th>Range</th>
                    <th>Head</th>
                    <th>Body</th>
                    <th>Leg</th>
                  </tr>
                  {i.weaponStats.damageRanges.map((j) => {
                    return (
                      <>
                        <tr>
                          <td>
                            {j.rangeStartMeters} - {j.rangeEndMeters} m{" "}
                          </td>
                          <td>
                            <p>{Math.floor(j.headDamage)}</p>
                          </td>
                          <td>
                            <p>{Math.floor(j.bodyDamage)}</p>
                          </td>
                          <td>
                            <p>{Math.floor(j.legDamage)}</p>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </table>
              </div>
            </div>
          );
        else
          return (
            <>
              <h1>{i.displayName}</h1>
              <img src={i.displayIcon} />
            </>
          );
      })}
    </div>
  );
}

export default Weapons;
