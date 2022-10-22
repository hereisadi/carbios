import React, { useEffect } from "react";
import "./about.css";
import Bounce from "react-reveal/Bounce";
import { aboutc } from "../Dataset";
const About = () => {
  useEffect(() => {
    document.title = "About || CARBIOS";
  }, []);
  return (
    
      <>
      <div className="about-top">
        <div className="about-main">
          <Bounce left>
            <h1>We help in Waste Management and contribute</h1>
            <h1>to the growth of self sustainable Business.</h1>
            <h1>Together.</h1>
          </Bounce>
        </div>
       

      </div>
      <div className="about-content">
      {aboutc.map((item) => {
        return(
          <>
          <div className="aboutd" key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.content}</p>
          </div>
          </>
        )
      })}
    </div></>
       
  
  );
};

export default About;
