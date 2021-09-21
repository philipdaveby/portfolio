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
    const { pathname } = useLocation();

    return (
        <div className="home" style={{ backgroundColor: pathname === '/' ? 'pink' : pathname === '/about' ? 'black' : 'lightgreen' }}>
            <div className="home__projects">
                <p className="arrow-left">&lt;</p>
                <p className="arrow-right">&gt;</p>
                {portfolioItems.map(project => {
                    return <Projects setOpenPopUp={setOpenPopUp} openPopUp={openPopUp} project={project} />
                })}
            {openPopUp ? <PopUp setOpenPopUp={setOpenPopUp}/> : ''}
            </div>
        </div>
    )
}

export default Home
