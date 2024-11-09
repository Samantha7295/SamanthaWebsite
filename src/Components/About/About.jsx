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
            <p>I’m a Systems Design Engineering student at the University of Waterloo, blending my creativity and technical skills to build solutions that bridge art 🎨 and technology 🤖.</p>
            <p>Through internships at Scotiabank and UPS, I’ve combined my knowledge in Python and VBA with problem-solving skills to automate workflows, optimize data processes, and improve reporting accuracy. As a Global Risk Management Intern at Scotiabank, I automated SOX compliance processes by building robust VBA macros and data analysis tools that made risk reporting more efficient.📊.</p>
            <p>Outside of work, I take on leadership roles, like my position as Financial Coordinator for TechNova, where I manage a $40,000+ hackathon budget and collaborate with suppliers to create memorable experiences for 250+ attendees 🎉.</p>
            <p>Whether sketching on canvas or coding up a digital project, I’m all about bringing ideas to life and pushing boundaries of what I can create!👩‍💻</p>
        </div>
    </div>
  )
}

export default About
