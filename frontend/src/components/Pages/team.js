import React, { useEffect } from "react";
import "./team.css";
import Bounce from "react-reveal/Bounce";
import { team } from "../Dataset";
import { FaLinkedinIn } from "react-icons/fa";

const Team = () => {
  useEffect(() => {
    document.title = "Team || CARBIOS";
  }, []);
  return (
    <>
      <Bounce bottom>
        <div className="team-top">
        <div className="team-stats-card5">
          {team.map((item) => {
            return (
              <div key={item.id} className="team-stats5">
                <div>
                  <center>
                    <img className="team-img5" src={item.img} alt={item.name} />
                  </center>
                </div>

                <div className="social-media">
                  <a href={item.linkedin} rel="noreferrer" target="_blank">
                    <button className="btn-icon2">
                      <FaLinkedinIn className="icon-color1" size={25} />
                    </button>
                  </a>

                  <a href={item.github} rel="noreferrer" target="_blank">
                    {item.icon0}
                  </a>
                </div>

                <h1>{item.name}</h1>
                <h2 className="team-posting-sec">{item.branch}</h2>
              </div>
            );
          })}
        </div>
        </div>
      </Bounce>
    </>
  );
};

export default Team;
