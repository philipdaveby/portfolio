import React, { useState } from 'react'
// import Navigation from '../Navigation/Navigation'
// import Nav from '../Nav/Nav'
import './home.scss'
import eatsy from '../../images/eatsy-plan.png'
import github from '../../images/github.png'
import website from '../../images/website.png'
import signature from '../../images/signature-white-3.png'
import information from '../../images/information.png'
import PopUp from '../PopUp/PopUp'

const Home = () => {

    const [openPopUp, setOpenPopUp] = useState(false);

    return (
        <div className="home">
            <img src={signature} alt="Logo" className="home__signature"/>
            <div className="home__projects">
                <p className="arrow-left">&lt;</p>
                <img src={eatsy} alt="Screenshot of Eatsy app" className="eatsy-screenshot" onClick={() => setOpenPopUp(true)}/>
                <p className="arrow-right">&gt;</p>
                <h2 className="home__heading">EATSY</h2>
                <div className="home__links">
                    <a href="https://github.com/Wppvater/salted-paj-final-project" target="_blank" rel="noopener noreferrer"><img src={github} alt="GitHub logo" className="home__github" /></a>
                    <img src={information} alt="Information logo" className="home__info" onClick={() => openPopUp ? setOpenPopUp(false) : setOpenPopUp(true)} />
                    <a href="https://eatsy.tk" target="_blank" rel="noopener noreferrer"><img src={website} alt="Website logo" className="home__website" /></a>
                </div>
            {openPopUp ? <PopUp setOpenPopUp={setOpenPopUp}/> : ''}
            </div>
            {/* <Navigation /> */}
            {/* <Nav /> */}
        </div>
    )
}

export default Home
