import React from 'react'
import './Hero.css'
import profile_img from '../../../assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
        <div id='home' className="hero">                      {/*Profile*/}
        <img src={profile_img} className="profile-image" alt =""/>
        <h1><span>I'm Hariz Razin,</span> a student in Malaysia</h1>
        <p>Currently pursuing in Bachelor of Software Engineering in Universiti Malaysia Pahang Sultan Abdullah seeking for internship</p>
        <div className="hero-action">                         {/*Profile Links to Github and Linkedin*/}
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
            <a href="https://razin-portfolio-react-js.vercel.app/Hariz_Razin_Resume.pdf" download="Hariz_Razin_Resume.pdf" className="hero-resume">My Resume</a>
        </div>
    </div>
  )
}

export default Hero