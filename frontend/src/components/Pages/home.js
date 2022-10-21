import React from "react";
import "./home.css";
import Typed from 'react-typed';
import Reveal from 'react-reveal/Reveal';
import Bounce from 'react-reveal/Bounce';

const home = () => {
  return (
    <>
    <Reveal>
    <div className="home-top">
        <div className="home-text">
          <Bounce bottom>
          <Typed
            className="typewriter"
            strings={[
              "An Advanced Waste Management System!", //more relevant text can be added
              "For The NITS by the NITS!",
              "Zero Carbon Emission!",
            ]}
            typeSpeed={90}
            backSpeed={20}
            loop
          />
          </Bounce>
        </div>
      </div>
    </Reveal>
      
    </>
  );
};

export default home;
