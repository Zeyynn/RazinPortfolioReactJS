import React from 'react'
import './Hero.css'
import profile_img from '../../../assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <>
    {/*Profile*/}

        <div id='home' className="hero">                      
        <img src={profile_img} className="profile-image" alt =""/>
        <h1><span className='hero-name'>I'm Hariz Razin,</span> a recent fresh graduate in <span className='hero-country'>Malaysia</span></h1>
        <p>Studied Bachelor of Software Engineering in Universiti Malaysia Pahang Sultan Abdullah and graduated in 9th November of 2025</p>
        <div className="hero-action">                         {/*Profile Links to Github and Linkedin*/}
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
            <a href="/HarizRazin_Resume.pdf" download="Hariz_Razin_Resume.pdf" className="hero-resume">My Resume</a>
        </div>
    </div>
    </>
  )
}

export default Hero