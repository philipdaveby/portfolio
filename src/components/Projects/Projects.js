import React from 'react'
import './projects.scss'
import github from '../../images/github.png'
import website from '../../images/website.png'
import information from '../../images/information.png'

const Projects = ({ openPopUp, setOpenPopUp, project}) => {
    return (
        <div className="projects">
            {/* <div class="c-tilt">   
                <a class="c-ryanyu" target="_blank">     
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/204808/ryan-logo.svg" alt="Ryan Yu" />   
                </a>   
                <div class="c-ryanyu-name-shadow">Philip Daveby</div>   
                <div class="c-ryanyu-name">Philip Daveby</div> 
            </div> */}
            <img src={project.imageLink} alt={project.imageAlt} className="projects__screenshot" onClick={() => setOpenPopUp(true)}/>
            <h2 className="home__heading">{project.name}</h2>
                <div className="home__links">
                    <a href={project.gitLink} target="_blank" rel="noopener noreferrer"><img src={github} alt="GitHub logo" className="home__github" /></a>
                    <img src={information} alt="Information logo" className="home__info" onClick={() => openPopUp ? setOpenPopUp(false) : setOpenPopUp(true)} />
                    <a href={project.webLink} target="_blank" rel="noopener noreferrer"><img src={website} alt="Website logo" className="home__website" /></a>
                </div>
        </div>
    )
}

export default Projects
