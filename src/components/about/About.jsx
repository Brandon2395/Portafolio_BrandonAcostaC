import React from 'react'
import './about.css'
import ME from '../../assets/IMG_aboutMe.jpg'
import { FaAward } from "react-icons/fa6";
import { GiGraduateCap } from "react-icons/gi";
import { LuFolderCheck } from "react-icons/lu"

const About = () => {
  return (
    <section id='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>

    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="About Image" />
        </div>
      </div>

      <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className='about__card'>
              <GiGraduateCap className='about__icon'/>
              <h5>Studies</h5>
              <small>Bachelor's Degree in Geology, University of Costa Rica</small>
              <div>&nbsp;</div> {/* Espacio */}
              <small>Computer Systems Engineering Student, University Fidélitas</small>
            </article>

            <article className='about__card'>
              <LuFolderCheck className='about__icon'/>
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum provident quos atque laudantium voluptates dicta, ipsa sapiente rerum sint? Amet, accusantium. Perspiciatis alias suscipit placeat pariatur architecto aut repellendus nesciunt.
          </p>

          <a href="#contact" className='btn btn-primary'>Contact</a>
        </div>
    </div>
    </section>
  )
}

export default About