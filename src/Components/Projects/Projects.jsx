import React from 'react'
import './Projects.css'
import project_1 from '../../assets/project-1.png'
import project_2 from '../../assets/project-2.png'
import project_3 from '../../assets/project-3.png'
import project_icon_1 from '../../assets/project-icon-1.png'
import project_icon_2 from '../../assets/project-icon-2.png'
import project_icon_3 from '../../assets/project-icon-3.png'


const Projects = () => {
  return (
    <div className='projects'> 
        <div className="project" id="project"> 
            <img src={project_1} alt=""/>
            <div className="caption">
                <img src={project_icon_1} alt="" />
                <h3>Webscraper</h3>
                <p>Developed a WebScraper tool to automate data extraction from Yahoo! Finance, streamlining market research with organized CSV exports and a user-friendly web interface.</p>
            </div>
        </div>
        <div className="project"> 
            <img src={project_2} alt=""/>
            <div className="caption">
                <img src={project_icon_2} alt="" />
                <h3>Second Project</h3>
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
