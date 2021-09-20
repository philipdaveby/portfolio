import React from 'react'
import './newDesign.scss'
import eatsy from '../../images/eatsy-plan.png';
import Nav from '../Nav/Nav';

const NewDesign = () => {
    return (
        <div className="new-design">
            <img src={eatsy} alt="Screenshot of Eatsy app" className="eatsy__screenshot"/>
            <h2>EATSY</h2>
            <Nav />
        </div>
    )
}

export default NewDesign
