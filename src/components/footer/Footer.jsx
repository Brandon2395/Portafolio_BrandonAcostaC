import React from 'react'
import './footer.css'
import { FaFacebook } from "react-icons/fa"; 
import { FaInstagram } from "react-icons/fa"; 
import { BsLinkedin } from "react-icons/bs"; 

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Brandon Acosta</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
      <a href="https://facebook.com"><FaFacebook /></a>
      <a href="https://instagram.com"><FaInstagram /></a>
      <a href="https://linkedin.com"><BsLinkedin /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Brandon Acosta Cascante. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer