import React from 'react'
import './About.css'
import theme_pattern from '../../../assets/theme_pattern1.svg'
import aboutme_img from '../../../assets/aboutme_img.jpg'

const About = () => {
  return (
    <div id='about' className='about'>                        {/*About Me*/}
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt=""/>
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={aboutme_img} alt="" />                  {/*About Me Img*/}
        </div>
        <div className="about-right">
            <div className="about-para">                      {/*About Me Desc*/}
                <p>A university student currently interning at Trigon Tech as a Full Stack Developer</p>
                <p>Have experience in both Frontend and Backend Development.</p>
                <p>Links for LinkedIn, Github and Trigon Tech :</p>
                <p><a href="https://www.linkedin.com/in/hariz-razin-m-893638302" target="_blank" rel="noopener noreferrer" className='links'>LinkedIn</a></p>
                <p><a href="https://github.com/Zeyynn" target="_blank" rel="noopener noreferrer" className='links'>GitHub</a></p>
                <p><a href="https://trigontech.my" target="_blank" rel="noopener noreferrer" className='links'>Trigon Tech</a></p>
            </div>
            <div className="about-skills">                    {/*About Me Skills*/}
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
      <div className="about-achievements">    {/*About Me Achievements*/}
      <hr />                 
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