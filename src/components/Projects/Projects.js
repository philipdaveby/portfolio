import React from 'react'
import './projects.scss'
import github from '../../images/github-white.png'
import website from '../../images/website-white.jpg'
import information from '../../images/info-white.png'

const Projects = ({ openPopUp, setOpenPopUp, project}) => {

    return (
        <div className="projects">
            <img src={project.imageLink} alt={project.imageAlt} className={openPopUp ? "hide projects__screenshot" : "projects__screenshot"} onClick={() => setOpenPopUp(true)}/>
            <h2 className="projects__heading">{project.name.toUpperCase()}</h2>
                <div className="projects__links">
                    <a href={project.gitLink} target="_blank" rel="noopener noreferrer"><img src={github} alt="GitHub logo" className="projects__github" /></a>
                    <img src={information} alt="Information logo" className="projects__info" onClick={() => openPopUp ? setOpenPopUp(false) : setOpenPopUp(true)} />
                    <a href={project.webLink} target="_blank" rel="noopener noreferrer"><img src={website} alt="Website logo" className="projects__website" /></a>
                </div>
        </div>
    )
}

export default Projects
