import React, { useState, useEffect, useRef } from 'react'
// import Navigation from '../Navigation/Navigation'
// import Nav from '../Nav/Nav'
import { useLocation } from 'react-router'
import ArrowKeysReact from 'arrow-keys-react';
import SwipeReact from 'swipe-react';
import './home.scss'

import PopUp from '../PopUp/PopUp'
import Projects from '../Projects/Projects'
import portfolioItems from "../../data/portfolioItems";

const Home = () => {

    const [openPopUp, setOpenPopUp] = useState(false);
    const [currentProject, setCurrentProject] = useState(1);
    const { pathname } = useLocation();

    const arrowKeys = useRef(null);

    useEffect(() => {
        arrowKeys.current.focus();
    }, [])

    ArrowKeysReact.config({
        left: () => {
          prevProject();
        },
        right: () => {
          nextProject();
        }
      });
    SwipeReact.config({
        left: () => {
            prevProject();
          },
          right: () => {
            nextProject();
          }
    });

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
        <div ref={arrowKeys} {...SwipeReact.events} {...ArrowKeysReact.events} tabIndex="1" className="home" style={{ backgroundColor: pathname === '/' ? 'pink' : pathname === '/about' ? 'black' : 'lightgreen' }}>
        {/* {focus()} */}
            <p className="arrow-left" onClick={prevProject}>&lt;</p>
            <p className="arrow-right" onClick={nextProject}>&gt;</p>
            <div className="home__projects">
                {portfolioItems.map((project, index) => {
                    if (currentProject === project.id) {
                        return <Projects key={index} setOpenPopUp={setOpenPopUp} openPopUp={openPopUp} project={project} />
                    }
                    return '';
                })}
            {portfolioItems.map((project, index) => {
                if (project.id === currentProject) {
                    return openPopUp ? <PopUp key={index} project={project} setOpenPopUp={setOpenPopUp}/> : '';
                }
                return '';
            })}
            </div>
        </div>
    )
}

export default Home
