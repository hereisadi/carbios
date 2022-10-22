import React, { useEffect } from "react";
import "./mission.css";
import Flash from "react-reveal/Flash";
const Mission = () => {
  useEffect(() => {
    document.title = "Mission || CARBIOS";
  }, []);
  return (
    <Flash>
      <div className="mission-top">
        <div className="mission-main">
          <h1>THE PRIME VISION</h1>
          <h2>With the motive of efficiently managing waste, our mission is to create a sustainable and litter free campus with timely tracking of waste disposal and it's collection.</h2>
          <h2>“I will not let anyone walk through my mind with their dirty feet.”</h2>
          <h2>-Mahatma Gandhi</h2> 
          <ul className="data-content">
           <p>i) We will also provide a section where people could put in reports of unauthorised loitering of campus areas and the info submitted will go directly to the administration so that corrective measures can be taking.</p>
           <p>ii) We believe, we can make control carbon emissions, slowly but definitely. And this can only be done if we start putting our foots together</p>
          
          </ul>
          
        </div>
      </div>
    </Flash>
  );
};

export default Mission;
