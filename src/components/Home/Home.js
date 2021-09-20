import React from 'react'
// import Navigation from '../Navigation/Navigation'
// import Nav from '../Nav/Nav'
import './home.scss'
import eatsy from '../../images/eatsy-plan.png'

const Home = () => {
    return (
        <div className="home">
            <h1 className="home__signature">Philip Daveby</h1>
            <div className="home__projects">
                <p className="arrow-left">&lt;</p>
                <img src={eatsy} alt="Screenshot of Eatsy app" className="eatsy-screenshot"/>
                <p className="arrow-right">&gt;</p>
            </div>
            {/* <Navigation /> */}
            {/* <Nav /> */}
        </div>
    )
}

export default Home
