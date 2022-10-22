import React, {useEffect} from "react";
import "./home.css";
import Typed from 'react-typed';
import Reveal from 'react-reveal/Reveal';
import Bounce from 'react-reveal/Bounce';
import Jump from 'react-reveal/Jump';
import {Link} from 'react-router-dom'
const Home = () => {
  useEffect(() => {
    document.title = "CARBIOS";
  }, []);
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
              "This is CARBIOS!",
            ]}
            typeSpeed={90}
            backSpeed={20}
            loop
          />
          </Bounce>
        </div>
      </div>

    
      <Jump>
      <div className="hometop-apply">
        <div className="hometop-reg">
          <ul style={{ color: "white" }}>
            <strong>
             User and Admin Login
            </strong>{" "}
          </ul>
        </div>
        <div className="hometop-link1">
          <Link to={"/options"}>
            <button className="hometop-link1btn">Let's Proceed!</button>
          </Link>
        </div>
      </div>
      </Jump>
      

    </Reveal>
      
    </>
  );
};

export default Home;
