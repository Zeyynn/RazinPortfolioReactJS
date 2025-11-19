import React from 'react'
import './About.css'
import theme_pattern from '../../../assets/theme_pattern1.svg'
import aboutme_img from '../../../assets/aboutme_img.jpg'

const About = () => {
  return (
    <div id='about' className='about'>                        {/*About Me*/}
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={aboutme_img} alt="" />                  {/*About Me Img*/}
        </div>
        <div className="about-right">
          <div className="about-para">                      {/*About Me Desc*/}
            <p>A graduated university student in Universiti Malaysia Pahang Sultan Abdullah (UMPSA)</p>
            <p>Have experience in both Frontend and Backend Development.</p>
            <p>Recently completed an internship at Trigon Tech as a Full Stack Developer.</p>
            <p>Links for LinkedIn, Github</p>
            <p><a href="https://www.linkedin.com/in/hariz-razin-m-893638302" target="_blank" rel="noopener noreferrer" className='links'>LinkedIn</a></p>
            <p><a href="https://github.com/Zeyynn" target="_blank" rel="noopener noreferrer" className='links'>GitHub</a></p>
            <p><a href="https://trigontech.my" target="_blank" rel="noopener noreferrer" className='links'>Trigon Tech</a></p>
          </div>
          <div className="about-skills">
            <div className="about-skill" style={{ "--target-width": "95%" }}>
              <p>HTML & CSS</p>
              <div className="bar-wrapper">
                <div className="bar"></div>
              </div>
            </div>
            <div className="about-skill" style={{ "--target-width": "77%" }}>
              <p>React Framework<img></img></p>
              <div className="bar-wrapper">
                <div className="bar"></div>
              </div>
            </div>

            <div className="about-skill" style={{ "--target-width": "70%" }}>
              <p>JavaScript</p>
              <div className="bar-wrapper">
                <div className="bar"></div>
              </div>
            </div>
            <div className="about-skill" style={{ "--target-width": "75%" }}>
              <p>Laravel Framework</p>
              <div className="bar-wrapper">
                <div className="bar"></div>
              </div>
            </div>
            <div className="about-skill" style={{ "--target-width": "70%" }}>
              <p>PHP</p>
              <div className="bar-wrapper">
                <div className="bar"></div>
              </div>
            </div>
            <div className="about-skill" style={{ "--target-width": "75%" }}>
              <p>TypeScript</p>
              <div className="bar-wrapper">
                <div className="bar"></div>
              </div>
            </div>
            <div className="about-skill" style={{ "--target-width": "50%" }}>
              <p>MySQL</p>
              <div className="bar-wrapper">
                <div className="bar"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="about-achievements">    {/*About Me Achievements*/}
        <hr />
        <div className="about-achievement">
          <h1>1</h1>
          <p>Years of Experience</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>9</h1>
          <p>Projects Completed</p>
        </div>
        <hr />
      </div>
    </div>
  )
}

export default About