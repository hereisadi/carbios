import React,{useEffect} from 'react'
import './about.css'
const About = () => {
  useEffect(() => {
    document.title = "About || CARBIOS";
  }, []);
  return (
    <div className='about-top'>about</div>
  )
}

export default About