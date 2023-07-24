import "./Agents.css";
import React from "react";
import { useState } from "react";

import FetchApi from "../Content/FetchApi";

function Agents() {
  const [data, SetData] = useState([]);
  return (
    <div className="background-img">
      <h1 className="heading">Agents</h1>
      <FetchApi url="https://valorant-api.com/v1/agents" setData={SetData} />
      {console.log(data)}
      <div className="head">
        <div className="head-container">
        <h1 className="roles">Roles</h1>
        <img className="logo" src="https://media.valorant-api.com/agents/roles/dbe8757e-9e92-4ed4-b39f-9dfc589691d4/displayicon.png" alt="" />
        <h1 className="role">Deulist</h1>
        <p>Duelists are self-sufficient fraggers who their team expects, through abilities and skills, to get high frags and seek out engagements first.</p>
        <img className="logo" src="https://media.valorant-api.com/agents/roles/1b47567f-8f7b-444b-aae3-b0c634622d10/displayicon.png" alt="" />
        <h1 className="role">Initiator</h1>
        <p>Initiators challenge angles by setting up their team to enter contested ground and push defenders away</p>
        <img className="logo" src="https://media.valorant-api.com/agents/roles/5fc02f99-4091-4486-a531-98459a3e95e9/displayicon.png" alt="" />
        <h1 className="role">Sentinel</h1>
        <p>Sentinels are defensive experts who can lock down areas and watch flanks, both on attacker and defender rounds.</p>
        <img className="logo" src="https://media.valorant-api.com/agents/roles/4ee40330-ecdd-4f2f-98a8-eb1243428373/displayicon.png" alt="" />
        <h1 className="role">Controller</h1>
        <p>Controllers are experts in slicing up dangerous territory to set their team up for success.</p>
        </div>
      </div>
      {data.map((i) => {
        if (i.isPlayableCharacter)
          return (
            <div className="grid" key={i.uuid}>
              <div>
                <h1 className="char-name">{i.displayName}</h1>
                <img className="logo" src={i.role.displayIcon} alt="" />
                <h1 className="role">{i.role.displayName}</h1>
                <p>Is Available in Base Game : {i.isBaseContent ? "Yes" : "No"}</p>
                <p>Code Name : {i.developerName}</p>
                <p>{i.description}</p>
                {i.abilities.map((j, index) => {
                  return (
                    <div key={index}>
                      <img className="logo" src={j.displayIcon} alt="" />
                      <h3 className="role">{j.displayName}</h3>
                      <p>{j.description}</p>
                    </div>
                  );
                })}
              </div>
              <div className="img-container">
                <img className="char-img" src={i.background} alt="" />
                <img className="char-img" src={i.fullPortraitV2} alt="" />
              </div>
              <hr />
            </div>
          );
        else return <div key={i.uuid}></div>;
      })}
    </div>
  );
}

export default Agents;
