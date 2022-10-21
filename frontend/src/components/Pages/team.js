import React, { useEffect } from "react";
import "./team.css";
const Team = () => {
  useEffect(() => {
    document.title = "Team || CARBIOS";
  }, []);
  return <div className="team-top">team</div>;
};

export default Team;
