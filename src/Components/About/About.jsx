import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import about2_img from '../../assets/about2.png'
import play_icon from '../../assets/play-icon.png'


const About = () => {
  return (
    <div className = 'about'>
        <div className="about-left">
            <img src={about2_img} alt="" className='about-img' />
            {/* <img src={play_icon} alt="" className='play-icon' /> */}
        </div>
        <div className="about-right">
            <h3>ABOUT ME</h3>
            <h2>Hi, my name is Samantha La⛅</h2>
            <p>I am a student at the University of Waterloo studying Systems Design Engineering. I’m passionate about channeling creativity into building solutions that blend art🎨 and technology🤖.</p>
            <p>Whether sketching on canvas or coding up a digital project, I’m all about bringing ideas to life and pushing the boundaries of what I can create!👩‍💻</p>
        </div>
    </div>
  )
}

export default About
