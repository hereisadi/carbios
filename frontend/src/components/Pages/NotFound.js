import React, { useEffect } from "react";
import "./NotFound.css";

import { Link } from "react-router-dom";
const NotFound = () => {
  useEffect(() => {
    document.title = "404 Not Found";
  }, []);
  return (
    <>
    <div className="notop">
      <h1>404</h1>
      <div className="not-found-text">
     <h3>Whoops, page not found!</h3>
     <h3>We can’t seem to find the page you’re looking for :(</h3>
     <h2 className='gohome'>Go to Home? <Link to={'/'}>Home</Link></h2>
   </div>
    </div>
     
    </>
  );
};

export default NotFound;
