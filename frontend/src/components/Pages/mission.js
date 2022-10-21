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
          <h2>Lorem ipsum dolor sit amet consectetur.</h2>
          <h2>Where the value of life is more than that of gold”</h2>
          <h2>Dr. xyz</h2> 

          <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, a.</h4>
          <ul className="data-content">
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quia veritatis!</li>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo.</li>
          </ul>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente sequi unde officia!</p>
        </div>
      </div>
    </Flash>
  );
};

export default Mission;
