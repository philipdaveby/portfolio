import React, { useState } from 'react'
// import Navigation from '../Navigation/Navigation'
// import Nav from '../Nav/Nav'
import './home.scss'
import { useLocation } from 'react-router'

import PopUp from '../PopUp/PopUp'
import Projects from '../Projects/Projects'
import portfolioItems from "../../data/portfolioItems";

const Home = () => {

    const [openPopUp, setOpenPopUp] = useState(false);
    const [currentProject, setCurrentProject] = useState(1);
    const { pathname } = useLocation();

    const nextProject = () => {
        setOpenPopUp(false);

        if (currentProject === portfolioItems.length) {
            setCurrentProject(1);
            return;
        }
        setCurrentProject(currentProject+1);
    }
    const prevProject = () => {
        setOpenPopUp(false);

        if (currentProject === 1) {
            setCurrentProject(portfolioItems.length);
            return;
        }
        setCurrentProject(currentProject-1);
    }

    return (
        <div className="home" style={{ backgroundColor: pathname === '/' ? 'pink' : pathname === '/about' ? 'black' : 'lightgreen' }}>
            <div className="home__projects">
                <p className="arrow-left" onClick={prevProject}>&lt;</p>
                <p className="arrow-right" onClick={nextProject}>&gt;</p>
                {portfolioItems.map(project => {
                    if (currentProject === project.id) {
                        return <Projects setOpenPopUp={setOpenPopUp} openPopUp={openPopUp} project={project} />
                    }
                    return '';
                })}
            {portfolioItems.map(project => {
                // console.log(project)
                if (project.id === currentProject) {
                    return openPopUp ? <PopUp project={project} setOpenPopUp={setOpenPopUp}/> : '';
                }
                return '';
            })}
            </div>
        </div>
    )
}

export default Home
