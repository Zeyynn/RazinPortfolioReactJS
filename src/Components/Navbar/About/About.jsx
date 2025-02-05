import React from 'react'
import './About.css'
import theme_pattern from '../../../assets/theme_pattern.svg'
import aboutme_img from '../../../assets/aboutme_img.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt=""/>
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={aboutme_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>A student currently looking for internship pleacement in Web Developer role preferrably in Frontend Development</p>
                <p>have experience in Backend Development</p>
                <p>LinkedIn and Github</p>
                <p><a href="https://www.linkedin.com/in/hariz-razin-m-893638302" target="_blank" rel="noopener noreferrer" className='links'>LinkedIn</a></p>
                <p><a href="https://github.com/Zeyynn" target="_blank" rel="noopener noreferrer" className='links'>GitHub</a></p>

            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style ={{width:"80%"}}/></div>
                <div className="about-skill"><p>ReactJS</p><hr style ={{width:"40%"}}/></div>
                <div className="about-skill"><p>JavaScript</p><hr style ={{width:"60%"}}/></div>
                <div className="about-skill"><p>Laravel</p><hr style ={{width:"70%"}}/></div>
                <div className="about-skill"><p>PHP</p><hr style ={{width:"60%"}}/></div>
                <div className="about-skill"><p>Java</p><hr style ={{width:"50%"}}/></div>
                <div className="about-skill"><p>MySQL</p><hr style ={{width:"50%"}}/></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>1</h1>
            <p>Years of Experience</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>8</h1>
            <p>Projects Completed</p>
        </div>
        <hr />
      </div>
    </div>
  )
}

export default About