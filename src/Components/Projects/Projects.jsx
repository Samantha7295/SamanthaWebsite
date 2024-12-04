import React from 'react'
import './Projects.css'
import project_1 from '../../assets/project-1.png'
import project_2 from '../../assets/devpost_thumbnail.png'
import project_3 from '../../assets/project-3.png'
import project_icon_1 from '../../assets/project-icon-1.png'
import project_icon_2 from '../../assets/project-icon-2.png'
import project_icon_3 from '../../assets/project-icon-3.png'

const Projects = () => {
  return (
    <div className='projects'> 
        <div className="project" id="project" onClick={(event) => window.open("https://github.com/Samantha7295/Webscraper", "_blank")}> 
            <img src={project_1} alt=""/>
            <div className="caption">
                <img src={project_icon_1} alt="" />
                <h3>Webscraper</h3>
                <p>Developed a WebScraper tool to automate data extraction from Yahoo! Finance, streamlining market research with organized CSV exports and a user-friendly web interface.</p>
            </div>
        </div>
        <div className="project" id="project" onClick={(event) => window.open("https://github.com/Samantha7295/Freakmometer", "_blank")}> 
            <img src={project_2} alt=""/>
            <div className="caption">
                <img src={project_icon_2} alt="" />
                <h3>FREAKMOMETER</h3>
                <p>FREAKMOMETER is a 5-day weather app built with TypeScript, React, and Tailwind CSS, designed to deliver a dynamic "FREAKCAST" alongside a unique, humorous user experience. It features API integrations to fetch and display weather data, adapting from traditional CSS to Tailwind for streamlined styling. </p>
            </div>
        </div>
        <div className="project"> 
            <img src={project_3} alt=""/>
            <div className="caption">
                <img src={project_icon_3} alt="" />
                <h3>Third Project</h3>
            </div>
        </div>
      
    </div>
  )
}

export default Projects
