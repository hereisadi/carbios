import React from 'react'
import "./Footer.css"
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";


const Footer = () => {
  return (
    <div>
      <div className="footer-main">
        <div className='footer-logo'>
          <img className='footer-img' src="./img/dark logo.jpeg" alt="Logo" />
           <ul>CARBIOS</ul>
        </div>
        <div className='footer-btns'>
        <button className="footer-btn-a"><a
          className="footer-anchor"
          href="" rel="noreferrer" 
          target="_#blank"
        >
          
        <FaLinkedinIn className="icon-color-a" size={23} /></a>
        </button>
        <button className="footer-btn-b">  <a
          className="footer-anchor"
          href="" rel="noreferrer" 
          target="_#blank"
        >
          <FaFacebookF className="icon-color-b" size={22} />
        </a>
        </button>
        
        <button className="footer-btn-c"><a
          className="footer-anchor"
          href="" rel="noreferrer" 
          target="_#blank"
        >
          <AiOutlineInstagram className="icon-color-c" size={30} />
        </a>
        </button>
        <button className="footer-btn-d">  <a
          className="footer-anchor"
          href="" rel="noreferrer" 
          target="_#blank"
        >
          <FaYoutube className="icon-color-d" size={26} />
        </a>
        </button>
        </div>
        <div>
          Contact us
          
        </div>
      </div>
    </div>
  )
}

export default Footer