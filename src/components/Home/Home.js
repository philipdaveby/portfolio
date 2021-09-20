import React from 'react'
// import Navigation from '../Navigation/Navigation'
// import Nav from '../Nav/Nav'
import './home.scss'
import eatsy from '../../images/eatsy-plan.png'
import github from '../../images/github.png'
import website from '../../images/website.png'

const Home = () => {
    return (
        <div className="home">
            <h1 className="home__signature">Philip Daveby</h1>
            <div className="home__projects">
                <p className="arrow-left">&lt;</p>
                <img src={eatsy} alt="Screenshot of Eatsy app" className="eatsy-screenshot"/>
                <p className="arrow-right">&gt;</p>
                <h2 className="home__heading">EATSY</h2>
                <div className="home__links">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer"><img src={github} alt="GitHub logo" className="home__github" /></a>
                    <a href="https://eatsy.tk" target="_blank" rel="noopener noreferrer"><img src={website} alt="Website logo" className="home__website" /></a>
                </div>
            </div>
            {/* <Navigation /> */}
            {/* <Nav /> */}
        </div>
    )
}

export default Home
