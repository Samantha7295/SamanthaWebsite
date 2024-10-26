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
                <p>First Project</p>
            </div>
        </div>
        <div className="project"> 
            <img src={project_2} alt=""/>
            <div className="caption">
                <img src={project_icon_2} alt="" />
                <p>Second Project</p>
            </div>
        </div>
        <div className="project"> 
            <img src={project_3} alt=""/>
            <div className="caption">
                <img src={project_icon_3} alt="" />
                <p>Third Project</p>
            </div>
        </div>
      
    </div>
  )
}

export default Projects
